export function secToHMS(timeSeconds) {
  let totalSeconds = timeSeconds
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const HMS = {
    h: hours,
    m: minutes,
    s: seconds,
  }
  return HMS
}


export function HMSTosec(HMS) {
  let seconds = 0;
  seconds += HMS.h * 3600;
  seconds += HMS.m * 60;
  seconds += HMS.s
  return seconds
}