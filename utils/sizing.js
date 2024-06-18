function getSize(num, root = 16) {
  if (typeof num != 'number') {
    console.error("Not a number")
  }
  console.log(`${num}: ${num/root}rem,`)
}

// function getFontSizesRange(firstSize, lastSize, root = 16) {
//   for(num = firstSize; num <= lastSize; num++) {
//     getFontSize(num, root)
//   }
// }

function getSizesList(...numList) {
  numList.sort( (a,b) => a > b )
  numList.forEach( num => getSize(num))
}


getSizesList(8, 12, 15, 20, 32, 36)
// 8: 0.5rem,
// 12: 0.75rem,
// 16: 1rem,
// 20: 1.25rem,
// 32: 2rem,
// 36: 2.25rem,