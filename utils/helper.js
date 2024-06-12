function getFontSizes(start, end, rem_px = 16) {
  for(i = start; i <= end; i++) {
    console.log(`${i/rem_px}rem, ${i}px`)
  }
}

// getFontSizes(12, 80)
getFontSizes(10, 80)
