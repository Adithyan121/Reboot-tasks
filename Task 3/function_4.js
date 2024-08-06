let word = "malayali";
let result = findPalindrome(word);
console.log(`'${result}' is the longest palindrome in the word '${word}'`);

function findPalindrome(s) {
    if (!s || s.length <= 1) return s;
  
    let start = 0, maxLength = 1;
  
    for (let i = 0; i < s.length; i++) {
        slice(s, i, i); // odd length
        slice(s, i, i + 1); // even length
    }
  
    function slice(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }
  
    return s.substring(start, start + maxLength);
}
