function charCount(str) {
    var result = {};
    for(var letter of str) {
        letter = letter.toLowerCase();
        if(/[a-z0-9]/.test(letter)) {
            result[letter] = ++result[letter] || 1;
        }
    }

    return result;    
}

//O(n)
charCount('Hello There');