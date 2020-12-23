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
⚠️♿ En finir avec la dépendance financière des personnes handicapées en couple

→ Objectif rempli à ${progression}%

→ Plus que ${nbMissingSignatures} signatures

→ Il nous reste ${differenceInCalendarDays} jours

✍️ Signez la pétition
🔁 Partagez autour de vous

> https://petitions.senat.fr/initiatives/i-416 <

+ d'infos dans mon tweet épinglé !
`
  ];
}
