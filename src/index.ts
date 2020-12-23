import { schedule } from "./scheduling";
import { retrievePetitionPage, getDataFromPetitionPage } from "./petition";
import { makeStatusesFromPetitionData } from "./status";
import { postThread } from "./tweet";

schedule(() => 
  retrievePetitionPage()
    .then(getDataFromPetitionPage)
    .then(makeStatusesFromPetitionData)
    .then(postThread)
    .catch(console.error)
);
