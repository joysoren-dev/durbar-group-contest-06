function toQueryString(params) {
  // Hint 1 onujayi, Object.entries() diye object ke key-value pair gulo array akare niye ashlam jate loop chalate pari
  return (
    Object.entries(params)
      // Hint 2 & 3 onujayi, .map() diye protita key ar value ke encodeURIComponent() diye safe korlam ar `=` diye join korlam
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      // Sheshe shob gulo query pair ke `&` symbol diye eksathe jure ekta single query string baniye return kore dilam
      .join("&")
  );
}
