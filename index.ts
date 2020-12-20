import { schedule } from "./src/scheduling";
import { retrievePetitionData } from "./src/senatePetitionRetriever";
import { makeStatusesFromPetitionData } from "./src/status";
import { PostThread } from "./src/tweetPoster";

const petitionId = 'i-416';

schedule(() => 
  retrievePetitionData(petitionId)
    .then(makeStatusesFromPetitionData(petitionId))
    .then(PostThread)
    .catch(console.error)
);
