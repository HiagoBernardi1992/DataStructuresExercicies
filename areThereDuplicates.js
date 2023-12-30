function areThereDuplicates(arr) {
  console.log(arr);
  let checkArr = {};
  for(let i = 0; i < arr.length; i++) {
      if(!checkArr[arr[i]]) {
        checkArr[arr[i]] = 1;
      } else {
          return true;
      }
  }
  return false;
}

areThereDuplicates([1,2,3]);