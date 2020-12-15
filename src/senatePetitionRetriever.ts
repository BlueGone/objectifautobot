import got from "got";

export type PetitionId = `i-${number}`;

export function retrievePetitionPage(petitionId: PetitionId): Promise<string> {
  const url = `https://petitions.senat.fr/initiatives/${petitionId}`;
  
  return got(url)
    .then(res => res.body);
}
