function sameFrequency(one, two){
  let formatOne = one.toString();
  let formatTwo = two.toString();
  if(formatOne.length !== formatTwo.length) {
      return false;
  }
  let obj1 = {};
  for(let i = 0; i < formatOne.length; i++) {
      obj1[formatOne[i]] = obj1[formatOne[i]] ? ++obj1[formatOne[i]] : 1;
  }
  for(let i = 0; i < formatTwo.length; i++) {
      console.log(obj1);
      console.log(formatTwo[i]);
      if(!obj1[formatTwo[i]]) {
        return false
      } else {
          if(obj1[formatTwo[i]] > 0)
              obj1[formatTwo[i]]--;
          else
              return false;
      }
  }
  return true;
}

sameFrequency(3589578, 5879385);


