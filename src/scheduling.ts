import { job } from 'cron';

export function schedule(fn: () => void) {
  [
    '0 6-18/6 * * *',
  ].forEach((cronTime: string) => {
    job({
      cronTime,
      onTick: fn,
      start: true,
      timeZone: 'Europe/Paris',
    });
  });
}
