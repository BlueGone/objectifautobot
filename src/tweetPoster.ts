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

export function PostTweet(status: string): Promise<any> {
  return twit.post("statuses/update", { status });
}

export function PostThread(statuses: string[]): Promise<any> {
  return statuses.reduce((acc, status) =>
    acc.then((previousStatusIdStr: string | null) =>
      (previousStatusIdStr
        ? twit.post("statuses/update", { status, in_reply_to_status_id: previousStatusIdStr })
        : twit.post("statuses/update", { status })
      ).then((res => (res.data as { id_str: string }).id_str))
    )
  , Promise.resolve(null as (string | null)));
}