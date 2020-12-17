import { job } from 'cron';

export function schedule(fn: () => void) {
  job({
    cronTime: '0,30 6-22/1 * * *',
    onTick: fn,
    start: true,
  });
}