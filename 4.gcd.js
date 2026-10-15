function gcd(a, b) {
  // Hint 1 ar 2 onujayi, Euclidean algorithm use korar jonno ekti while loop shuru korlam,
  // jekhane b er man 0 na howa porjonto remainder ber korar step-gulo repeat hote thakbe
  while (b !== 0) {
    // b er current man ta temporary variable-e store kore rakhlam
    let temp = b;

    // a ke b diye divide kore reminder ta b er moddhe assign korlam (`a % b`),
    // jeta Euclidean algorithm er main concept
    b = a % b;

    // purono b er man ta a er moddhe transfer kore dilam
    a = temp;
  }

  // Loop sesh hole a er man-i hobe two non-negative integers er greatest common divisor, tai seta return korlam
  return a;
}
