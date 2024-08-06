let string1 = "cinema";
let string2 = "iceman";
let result = isAnagrams(string1,string2);
if(result===true){
    console.log(`The '${string1}' and '${string2}' are Anagrams`);
}
else{
    console.log(`The '${string1}' and '${string2}' are not Anagrams`);
}

function isAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    const count = {};
  
    for (let char of str1) {
      count[char] = (count[char] || 0) + 1;
    }
  
    for (let char of str2) {
      if (!count[char]) return false;
      count[char]--;
    }
  
    return true;
  }
  