
/* Interview Practice: Arrays */

/* firstDuplicate
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
*/

function firstDuplicate(a) {
  for (let i of a) {
    // store abs val of elem, minus 1 to acct for a.length
    let pos = Math.abs(i) - 1
    // return abs val if neg found (see below)
    if (a[pos] < 0) return pos + 1
    // at first visit, convert val to neg
    a[pos] = a[pos] * -1
  }
  return -1 // if none revisited, return -1
}

/* firstNotRepeatingCharacter
Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
*/

function firstNotRepeatingCharacter(s) {
    // create counter for each char
    let count = {};
    // for each elem, create key and store/increment count
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]]) count[s[i]]++;
        else count[s[i]] = 1;
    }
    // iterate keys for count === 1 and return key (char)
    for (let x in count) {
        if (count[x] === 1) {
            return x;
        }
    }
    // if no char returned, return empty symbol
    return '_';
}