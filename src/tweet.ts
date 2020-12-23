import Twit from "twit";
import {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
} from "./config";

const twit = new Twit({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
});

export type Status = string;
export type Statuses = [Status, ...Status[]]

export function postTweet(status: Status): Promise<Twit.PromiseResponse> {
  return twit.post("statuses/update", { status });
}

export function postReply(status: Status, replyToIdStr: string): Promise<Twit.PromiseResponse> {
  return twit.post("statuses/update", { status, in_reply_to_status_id: replyToIdStr })
}

function getIdStrFromTwitResponse(res: Twit.PromiseResponse) {
  return (res.data as { id_str: string }).id_str;
}

export function postThread([status, ...statuses]: Statuses): Promise<Twit.PromiseResponse> {
  return statuses.reduce(
    (lastResponse, status) => lastResponse
      .then(getIdStrFromTwitResponse)
      .then((replyToIdStr: string) => postReply(status, replyToIdStr)),
    postTweet(status)
  );
}