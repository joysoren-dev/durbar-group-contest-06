function chunkArray(arr, size) {
    // Shob gulo chunk ba subarrays store korar jonno ekti empty array banalam
    const chunkedArray = [];

    // Hint 1 onujayi, loop-ke protibar 1 kore baranor bodole `size` poriman forward korbo, 
    // tai `i += size` use korlam
    for (let i = 0; i < arr.length; i += size) {
        // Hint 2 onujayi, `arr.slice()` method use kore current index `i` theke `i + size` porjonto 
        // subarray ba chunk alada kore nilam. Eta automatically boundaries handle kore (jodi end array length chariyeo jay)
        const chunk = arr.slice(i, i + size);
        
        // Alada kora chunk ta amader main `chunkedArray` er moddhe push kore dilam
        chunkedArray.push(chunk);
    }

    // Sheshe complete chunked array ta return kore dilam
    return chunkedArray;
}
