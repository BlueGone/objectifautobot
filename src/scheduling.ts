import { job } from 'cron';

export function schedule(fn: () => void) {
  [
    '0 8-23 * * *',
    '0 0-6/2 * * *',
  ].forEach((cronTime: string) => {
    job({
      cronTime,
      onTick: fn,
      start: true,
      timeZone: 'Europe/Paris',
    });
  });
}
