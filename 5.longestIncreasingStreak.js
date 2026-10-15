function longestIncreasingStreak(nums) {
  // Edge case: Jodi input array ti empty hoy, tahole description onujayi 0 return korbo
  if (nums.length === 0) {
    return 0;
  }

  // Hint 1 onujayi, current streak length ar maximum streak length track korar jonno duita variable nilam
  let currentStreak = 1;
  let maxStreak = 1;

  // Hint 2 onujayi, index 1 theke shuru kore array er sesh porjonto iterate korlam
  for (let i = 1; i < nums.length; i++) {
    // Jodi current element tar ager element er theke strictly greater (boro) hoy
    if (nums[i] > nums[i - 1]) {
      // Tahole current streak count 1 bariye dilam
      currentStreak++;
    } else {
      // Hint 3 onujayi, jodi greater na hoy, tahole current streak count abar 1 theke reset kore dilam[cite: 5]
      currentStreak = 1;
    }

    // Proti step-e maximum streak length update kore rakhlam, jate shobcheye boro streak ta save thake[cite: 5]
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
  }

  // Sheshe shobcheye boro (maximum) increasing streak length ta return kore dilam[cite: 5]
  return maxStreak;
}
