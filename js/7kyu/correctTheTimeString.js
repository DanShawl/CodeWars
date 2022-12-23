// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"
// "11:70:10" -> "12:10:10"
// "19:99:99" -> "20:40:39"
// "24:01:01" -> "00:01:01"
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// function timeCorrect(timestring) {
//   if (timestring === null || timestring.length === 0) return timestring;
//   timestring = timestring.split(':');
//   let [hours, minutes, seconds] = timestring;
//   hours = Number(hours);
//   minutes = Number(minutes);
//   seconds = Number(seconds);

//   if (seconds > 60) {
//     timestring[2] = `${seconds < 10 ? '0' : ''}${seconds - 60}`;
//     minutes += 1;
//   } else {
//     timestring[2] = `${seconds < 10 ? '0' : ''}${seconds}`;
//   }

//   if (minutes > 60) {
//     timestring[1] = `${minutes < 10 ? '0' : ''}${minutes - 60}`;
//     hours += 1;
//   } else {
//     timestring[1] = `${minutes < 10 ? '0' : ''}${minutes}`;
//   }

//   if (hours > 24) {
//     timestring[0] = `${hours < 10 ? '0' : ''}${hours - 24}`;
//   } else {
//     timestring[0] = `${hours < 10 ? '0' : ''}${hours}`;
//   }

//   return timestring;
// }

// console.log(timeCorrect('25:70:75'));
// console.log(timeCorrect('19:99:99'));
// console.log(timeCorrect('09:10:01'));
// console.log(timeCorrect('24:01:01'));

function timeCorrect(times) {
  if (times === null || !times) return times === null ? null : '';

  const arr = times.split(':').map(Number).reverse();
  let [add1, add2] = [0, 0];
  for (let i = 0; i < 3; i++) {
    add2 = add1;
    if (i < 2) {
      add1 = Math.floor((arr[i] + add2) / 60);
      arr[i] = (arr[i] + add2) % 60;
    } else {
      arr[i] = (arr[i] + add2) % 24;
    }
  }
  return arr.join('').includes('NaN')
    ? null
    : arr
        .reverse()
        .map((el) => (el < 10 ? '0' + el : el))
        .join(':');
}
