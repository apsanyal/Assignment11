//STEP 1


// function alphabatize () {
// let string = prompt('Write a word.')
// return alert (string.split('').sort().join(''))
// }
// alphabatize()



//STEP 2

// let phrase = prompt("Enter a phrase.")
// function capitalizeWords(str) {
//     const words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return alert(words.join(" "));
//   }
// capitalizeWords(phrase)


//STEP 3

// let phrase = prompt("Write a phrase")
// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i].toLowerCase())) {
//         count++;
//       }
//     }
//     return alert(count);
//   }
//   countVowels(phrase)


//STEP 4


// let length = prompt('How long do you want your password to be?  Enter a number.')
// function generateId(length) {
    
//     const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return alert(result);
// }
// generateId(length)

//STEP 5

// const countryList = [];
// function promptCountries() {
    
//     let country = "";
//     do {
//       country = prompt("Enter several names of countries with different lenghts.  (hit 'ok' after each country or leave blank to finish):");
//       if (country) {
//         countryList.push(country);
//       }
//     } while (country);
//     return countryList;
//   }
//   promptCountries()

//   function getLongestCountryName(countryList) {
//     let longestCountryName = "";
//     for (let i = 0; i < countryList.length; i++) {
//       if (countryList[i].length > longestCountryName.length) {
//         longestCountryName = countryList[i];
//       }
//     }
//     return alert(longestCountryName);
//   }
//   getLongestCountryName(countryList)