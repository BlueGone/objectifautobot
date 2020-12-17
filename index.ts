import { schedule } from "./src/scheduling";
import { retrievePetitionData } from "./src/senatePetitionRetriever";
import { makeStatusFromPetitionData } from "./src/status";
import { PostTweet } from "./src/tweetPoster";

const petitionId = 'i-416';

schedule(() => 
  retrievePetitionData(petitionId)
    .then(makeStatusFromPetitionData(petitionId))
    .then(PostTweet)
    .catch(console.error)
)
