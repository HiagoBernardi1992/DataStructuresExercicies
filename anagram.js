function isAnagram(str1, str2) {
    if(str1.length !== str2.length)
        return false;
    let lookup = {};
    for (let i = 0; i < str1.length; i++) {
        lookup[str1[i]] = lookup[str1[i]] ? lookup[str1[i]]++ : 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if(lookup[str2[i]]) {
            lookup[str2[i]]--;
        } else {
            return false;
        }
    }

    return true;
}

isAnagram('abc', 'cba')