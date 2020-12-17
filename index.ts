import { getPetitionLink, PetitionData, retrievePetitionData } from "./src/senatePetitionRetriever";
import { PostTweet } from "./src/tweetPoster";

const petitionId = 'i-416';

function makeMessageFromPetitionData({ nbSignatures, maxSignatures}: PetitionData): string {
  return `
Déjà ${nbSignatures} signatures sur les ${maxSignatures} requises. Si vous n'avez pas encore signé, il est encore temps.

${getPetitionLink(petitionId)}
`
}

retrievePetitionData(petitionId)
  .then(makeMessageFromPetitionData)
  .then(PostTweet);
