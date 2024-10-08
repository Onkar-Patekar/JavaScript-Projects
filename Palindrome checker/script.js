const input = document.getElementById("input")
const result = document.getElementById("result");

function reverseString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = reverseString(value);
    // alert(reverse);

    if(value === reverse){
        // alert("It's Plaindrome");
        result.innerHTML = "It's Palindrome";
    }else{
        // alert("It's not Palindrome")
        result.innerHTML = "It's not Palindrome";
    }
    input.value = "";
}