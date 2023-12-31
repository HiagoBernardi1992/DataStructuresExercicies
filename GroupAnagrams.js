function groupAnagrams(strs) {
    let hashMap = {};

    for(let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join();
        if(!hashMap[sortedStr]) {
            hashMap[sortedStr] = [strs[i]];
        } else {
            hashMap[sortedStr].push(strs[i]);
        }
    }

    return Object.values(hashMap);
}