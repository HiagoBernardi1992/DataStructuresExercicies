function twoSum(nums, target) {
    let checked = {};
    let response = [];
    for(let i = 0; i < nums.length; i++) {
        if((target - nums[i]) in checked){
            response.push(checked[target - nums[i]]);
            response.push(i);
            break;
        } else {
            checked[nums[i]] = i;
        }
    }
    return response;
}