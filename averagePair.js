function averagePair(arr, average){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === average) return true;
    else if(avg < average) start++
    else end--
  }
  return false;
}

