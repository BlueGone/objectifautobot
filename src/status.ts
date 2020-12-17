import { differenceInCalendarDays } from "date-fns";
import { getPetitionLink, PetitionData, PetitionId } from "./senatePetitionRetriever";

const petitionDeadline = new Date(2021, 3, 10);

export const makeStatusFromPetitionData = (id: PetitionId) => (data: PetitionData) => {
  const { nbSignatures, maxSignatures } = data;

  const progression = Math.floor(nbSignatures * 100 / maxSignatures);

  const nbRemainingDays = differenceInCalendarDays(petitionDeadline, Date.now())

  return (
`
Déjà ${nbSignatures} signatures sur les ${maxSignatures} requises, soit ${progression}%.
Il reste ${nbRemainingDays} jours, si vous n'avez pas encore signé, il est encore temps.

${getPetitionLink(id)}
`
  );
}