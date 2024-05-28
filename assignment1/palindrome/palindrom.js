function isPalindrome(str){
     // Remove non-alphanumeric characters and convert to lowercase
     const pStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

     return pStr === pStr.split('').reverse().join('');
}

const testString = "level";
console.log(isPalindrome(testString));

