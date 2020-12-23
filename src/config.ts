import config from "../config.json";
import { env } from 'process';

export const TWITTER_CONSUMER_KEY = env.TWITTER_CONSUMER_KEY || config.TWITTER_CONSUMER_KEY;
export const TWITTER_CONSUMER_SECRET = env.TWITTER_CONSUMER_SECRET || config.TWITTER_CONSUMER_SECRET;
export const TWITTER_ACCESS_TOKEN = env.TWITTER_ACCESS_TOKEN || config.TWITTER_ACCESS_TOKEN;
export const TWITTER_ACCESS_TOKEN_SECRET = env.TWITTER_ACCESS_TOKEN_SECRET || config.TWITTER_ACCESS_TOKEN_SECRET;