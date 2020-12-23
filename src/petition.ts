import got from "got";
import cheerio from "cheerio";

export interface PetitionData {
  nbSignatures: number;
  maxSignatures: number;
}

export const petitionLink = "https://petitions.senat.fr/initiatives/i-416"; 

export function retrievePetitionPage(): Promise<string> {
  return got(petitionLink).then(res => res.body);
}

export function getDataFromPetitionPage(petitionPage: string): PetitionData {
  const regex = /(?<nbSignatures>\d+)\s*\/\s*(?<maxSignatures>\d+)\s*/

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

  throw new Error('getDataFromPetitionPage');
}
