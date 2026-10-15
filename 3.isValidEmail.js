function isValidEmail(email) {
  // Prothome email- er entire structure validate korar jonno ekti Regular Expression banalam
  // Hints onujayi, shuru te `^` ar sheshe `$` anchor use korechi jate shobta strict thake
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // .test() method diye check korlam input email string ta amader regex pattern ke match kore kina
  // Jodi match kore tahole true return korbe, na korle false return korbe
  return emailRegex.test(email);
}
