import { getPetitionLink, PetitionData, PetitionId } from "./senatePetitionRetriever";

export const makeStatusFromPetitionData = (id: PetitionId) => (data: PetitionData) => {
  const { nbSignatures, maxSignatures } = data;

  const progression = Math.floor(nbSignatures * 100 / maxSignatures);

  return (
`
Déjà ${nbSignatures} signatures sur les ${maxSignatures} requises, soit ${progression}%.
Si vous n'avez pas encore signé, il est encore temps.

${getPetitionLink(id)}
`
  );
}