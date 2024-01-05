function ValidParentheses(s) {
    let stack = [];
    for(var i = 0; i < s.length; i++) {
        switch(s[i]) {
            case "(":
                stack.push(s[i]);
                break;
            case "{":
                stack.push(s[i]);
                break;
            case "[":
                stack.push(s[i]);
                break;
            case ")":
                if(stack[stack.length - 1] != "(") {
                    return false;
                }
                stack.pop();
                break;
            case "}":
                if(stack[stack.length - 1] != "{") {
                    return false;
                }
                stack.pop();
                break;
            case "]":
                if(stack[stack.length - 1] != "[") {
                    return false;
                }
                stack.pop();
                break;
            default:
                return false;
        }        
    }
    return stack.length === 0;
};