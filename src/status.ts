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
⚠️♿ En finir avec la dépendance financière des personnes handicapées

→ ${nbMissingSignatures} signatures à récolter avant le 10 Mars pour que le Sénat étudie la pétition

→ objectif rempli à ${progression}%

✍️ Chaque signature compte !
🔁 Chaque partage aide !

↓ liens et infos juste en dessous ↓
`,
`
La pétition sur le site du Sénat : ${getPetitionLink(id)}

Une fois l'identité confirmée, les informations personnelles sont supprimées : cela permet juste de confirmer que chaque personne existe et ne vote qu'une fois.

C'est ce qui donne autant de poids à cette pétition !
`,
`
Pour signer la #pétitionAAH, tu peux utiliser ton compte d'identité numérique.

ll te suffit d'avoir :
- une adresse mail
- une carte d'identité
- un téléphone portable

Explications détaillées ↓
https://twitter.com/SandroSwordfire/status/1337781483201830912
`
  ];
}
