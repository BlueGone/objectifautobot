import { schedule } from "./src/scheduling";
import { retrievePetitionPage, getDataFromPetitionPage } from "./src/petition";
import { makeStatusesFromPetitionData } from "./src/status";
import { postThread } from "./src/tweet";

schedule(() => 
  retrievePetitionPage()
    .then(getDataFromPetitionPage)
    .then(makeStatusesFromPetitionData)
    .then(postThread)
    .catch(console.error)
);
