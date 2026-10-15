function isValidBdMobileNumber(phoneNumber) {
  // Hint 1 & 2 onujayi, shob valid prefixes (+88, 88, 01) ar total structure match korar jonno RegEx banalam
  const phoneRegex = /^(\+88|88)?01[3-9]\d{8}$/;

  // .test() method diye check korlam input number ta amader RegEx pattern ke properly match kore kina
  return phoneRegex.test(phoneNumber);
}
