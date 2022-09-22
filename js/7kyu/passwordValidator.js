// Your job is to create a simple password validation function, as seen on many websites.

// The rules for a valid password are as follows:

// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// You are permitted to use any methods to validate the password.

// Examples:
// password("Abcd1234"); ===> true
// password("Abcd123"); ===> false
// password("abcd1234"); ===> false
// password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
// password("ABCD1234"); ===> false
// password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
// password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;
// Extra info
// You will only be passed strings.
// The string can contain any standard keyboard character.
// Accepted strings can be any length, as long as they are 8 characters or more.

function password(str) {
  //validate password
  if (
    str.length >= 8 &&
    [...str].includes('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')
  ) {
    return true;
  }
  return false;
}

console.log(password('Abcdas1fa'));
