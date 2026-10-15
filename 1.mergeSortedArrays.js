function mergeSortedArrays(arr1, arr2) {
  // 1st array er current index track korar jonno pointer 'i' nilam
  let i = 0;

  // 2nd array er current index track korar jonno arekta pointer 'j' nilam
  let j = 0;

  // Final sorted array store korar jonno ekti empty array banalam
  const mergedArray = [];

  // Jokhono porjonto duita array er element-i traverse kora baki ache, totkhono loop cholbe
  while (i < arr1.length && j < arr2.length) {
    // Jodi arr1 er current element choto ba soman hoy arr2 er current element er theke
    if (arr1[i] <= arr2[j]) {
      // Tahole arr1 er element ta mergedArray te push korlam
      mergedArray.push(arr1[i]);
      // Porer element check korar jonno arr1 er pointer 1 bariye dilam
      i++;
    } else {
      // Jodi arr2 er element choto hoy, tahole arr2 er element ta push korlam
      mergedArray.push(arr2[j]);
      // Porer element check korar jonno arr2 er pointer 1 bariye dilam
      j++;
    }
  }

  // Jodi arr1 er kichu element baki theke jay (karon arr2 age sesh hoye gese),
  // tahole baki elements gulo seshe add kore dilam
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Jodi arr2 er kichu element baki theke jay (karon arr1 age sesh hoye gese),
  // tahole baki elements gulo seshe add kore dilam
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  // Sheshe complete sorted array ta return kore dilam
  return mergedArray;
}
