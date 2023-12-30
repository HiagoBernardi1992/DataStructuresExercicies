function sumZero(arr) {
    let rigth = arr.length - 1;
    let left = 0;
    while (left != rigth) {
        let sum = arr[left] + arr[rigth];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}