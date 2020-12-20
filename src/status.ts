import { differenceInCalendarDays } from "date-fns";
import { getPetitionLink, PetitionData, PetitionId } from "./senatePetitionRetriever";

const petitionDeadline = new Date(2021, 3, 10);

export const makeStatusesFromPetitionData = (id: PetitionId) => (data: PetitionData): string[] => {
  const { nbSignatures, maxSignatures } = data;

  const progression = Math.floor(nbSignatures * 100 / maxSignatures);
  const nbMissingSignatures = maxSignatures - nbSignatures;

  const nbRemainingDays = differenceInCalendarDays(petitionDeadline, Date.now())

  return [
`
Nous avons réuni ${progression}% des signatures nécessaires pour demander la fin de la dépendance financière des personnes handicapées 
♿

Mais il manque encore ${nbMissingSignatures} signatures pour que la pétition soit présentée au Sénat, alors à vos partages
✍️
`,
`
La pétition >
${getPetitionLink(id)}
`
  ];
}