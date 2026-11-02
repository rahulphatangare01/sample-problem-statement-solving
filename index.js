//array
import { twoSum, optimizedTwoSum } from "./array/twoSum.js";
import { reverseArray } from "./array/reverseArray.js";

// String
import { checkPalindrome } from "./string/check-palindrome.js";
import { reverseString } from "./string/reverse-string.js";
import { countVowels } from "./string/count-vowels.js";
import { removeSpaces } from "./string/remove-space.js";
import { charFrequency } from "./string/charter-frequency.js";
import { sentenceCase } from "./string/sentence-case.js";
import { firstUniqueChar } from "./string/first-unique-char.js";
import { checkAnagram } from "./string/check-anagram.js";
import { reverseWords } from "./string/reverse-Words-in-a-Sentence.js";
import { replaceVowels } from "./string/replace-Vowels.js";
import { longestWords } from "./string/longest-Word-in-a-Sentence.js";
import { isPanagram } from "./string/check-String-is-a-Pangram.js";
import { FindMaxValue } from "./array/find-max-value-in-array.js";
import { findMinValue } from "./array/find-min-value-in-array.js";
import { SumOFArr } from "./array/sum-of-Array-Elements.js";
import { averageOfArr } from "./array/average-of-Array-Elements.js";
const arr = [2, 7, 11, 15];
const target = 9;
const str = "level";
const reverseStr = "hello";
const removespaceStr = "hello world";
const uniqueStr = "leetcode";
const longestWordStr = "I love programming";
const checkPanagramStr = "The quick brown fox jumps over the lazy dog";
let str1 = "listen";
let str2 = "silent";
twoSum(arr, target);
optimizedTwoSum(arr, target);
reverseArray(arr);
checkPalindrome(str);
reverseString(reverseStr);
countVowels(reverseStr);
removeSpaces(removespaceStr);
charFrequency(removespaceStr);
sentenceCase(removespaceStr);
firstUniqueChar(uniqueStr);
checkAnagram(str1, str2);
reverseWords(removespaceStr);
replaceVowels(removespaceStr);
longestWords(longestWordStr);
// isPanagram(checkPanagramStr);

/////////////// Array Problem
let maxValArr = [3, 1, 9, 4, 7];
let sumArr = [2, 4, 6, 8];

FindMaxValue(maxValArr);
findMinValue(maxValArr);
SumOFArr(sumArr);
averageOfArr(sumArr);
