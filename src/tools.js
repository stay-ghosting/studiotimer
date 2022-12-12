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

export const getTimeFormated = (timeSeconds, useColons) => {

  const { h, m, s } = secToHMS(timeSeconds)

  let formatedString = "";
  // convert to string and 0 pad
  // different versions of formating
  if (useColons === true) {
    const [stringHours, stringMinutes, stringSeconds] = [h, m, s].map(value => value.toString().padStart(2, '0'))
    formatedString = `${stringHours}:${stringMinutes}:${stringSeconds}`
  } else {
    if (h !== 0) {
      formatedString += `${h}h`
    } if (m !== 0) {
      formatedString += `${m}m`
    } if (s !== 0) {
      formatedString += `${s}s`
    }
  }
  return formatedString
}