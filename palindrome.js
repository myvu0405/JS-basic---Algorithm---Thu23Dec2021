function isPalindrome(str){
    let j=0;
    for(let i=0;i<str.length;i++){
        j=str.length-i-1;
        if(i==j) {
            break;
        }
        if (str[i]!=str[j]) {
            return false;
        }

    }
    return true;
}

let test='aaaf7aaa';
console.log(isPalindrome(test));