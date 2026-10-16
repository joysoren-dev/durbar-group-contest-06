function diagonalSums(matrix) {
  // Matrix er total rows ba length koto seta ber kore n-er moddhe rakhlam
  const n = matrix.length;

  // Main ar secondary diagonal er sum store korar jonno duita variable 0 diye shuru korlam
  let main = 0;
  let secondary = 0;

  // Hint 1 & 2 onujayi, ekti single loop diye matrix er protita row ar column er upor iterate korlam
  for (let i = 0; i < n; i++) {
    // Main diagonal er element-gulo `matrix[i][i]` theke niye main sum er sathe jog korlam
    main += matrix[i][i];

    // Secondary diagonal er element-gulo `matrix[i][n - 1 - i]` theke niye secondary sum er sathe jog korlam
    secondary += matrix[i][n - 1 - i];
  }

  // Sheshe result hishebe main ar secondary sum gulo ekta object akare return kore dilam
  return { main, secondary };
}
