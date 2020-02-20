/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

const noBoringZeros = (n) => {
  let answer = n.toString();
  let lastNum = answer.length - 1;
  if(n === 0) {
    return 0;
  }

  const innerFunc = () => {
    answer = answer.slice(0, lastNum);
    lastNum = answer.length - 1;
    if(answer[lastNum] === '0') {
      innerFunc();
    }
  }

  if(answer[lastNum] === '0') {
    innerFunc();
  }

  return parseInt(answer);
}