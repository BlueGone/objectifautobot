import got from "got";
import cheerio from "cheerio";

export type PetitionId = `i-${number}`;

export interface PetitionData {
  nbSignatures: number;
  maxSignatures: number;
}

export function getPetitionLink(petitionId: PetitionId): string {
  return `https://petitions.senat.fr/initiatives/${petitionId}`;
}

export function retrievePetitionPage(petitionId: PetitionId): Promise<string> {
  return got(getPetitionLink(petitionId))
    .then(res => res.body);
}

export async function retrievePetitionData(petitionId: PetitionId): Promise<PetitionData> {
  const regex = /(?<nbSignatures>\d+)\s*\/\s*(?<maxSignatures>\d+)\s*/

  const petitionPage = await retrievePetitionPage(petitionId);
  const $ = cheerio.load(petitionPage);
  const signaturesContainer = $('div.progress__bar__title');

  const match = regex.exec(signaturesContainer.text());

  if (match && match.groups) {
    const nbSignatures = + match.groups.nbSignatures;
    const maxSignatures = + match.groups.maxSignatures;

    return {
      nbSignatures,
      maxSignatures,
    };
  }

  throw new Error('retrievePetitionData');
}
