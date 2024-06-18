function getFontSize( num, root = 16) {
  if (typeof num == 'string') {
    if (num.includes("px")) num = num.split("px")[0]
  }
  console.log(`${num/root}rem, ${num}px`)
}

function getFontSizesRange(firstSize, lastSize, root = 16) {
  for(num = firstSize; num <= lastSize; num++) {
    getFontSize(num, root)
  }
}

function getFontSizesList(...numList) {
  numList.sort()
  numList.forEach( num => getFontSize(num))
}

// getFontSizesRange(12, 20)
// getFontSizesList("80px" , "60px", "27px", "21px", "18px")

// getFontSize("12px")
