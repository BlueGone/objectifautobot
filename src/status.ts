import { differenceInCalendarDays } from "date-fns";
import { PetitionData, petitionLink } from "./petition";
import { Statuses } from "./tweet";

const petitionDeadline = new Date(2021, 2, 10);

export function makeStatusesFromPetitionData({
  nbSignatures,
  maxSignatures,
}: PetitionData): Statuses {
  const progression = Math.floor(nbSignatures * 100 / maxSignatures);
  const nbMissingSignatures = maxSignatures - nbSignatures;
  const nbRemainingDays = differenceInCalendarDays(petitionDeadline, Date.now())

  return [
`
⚠️♿ En finir avec la dépendance financière des personnes handicapées en couple

→ Objectif rempli à ${progression}%

→ Plus que ${nbMissingSignatures} signatures

→ Il nous reste ${nbRemainingDays} jours

✍️ Signez la pétition
🔁 Partagez régulièrement

> objectifautonomie.fr <

+ d'infos sur le site !
`
  ];
}
