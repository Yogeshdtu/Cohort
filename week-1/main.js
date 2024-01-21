//Object
const user = {
    firstName:"Yogesh",
    gender:"male"
}
//console.log(user["firstName"]);
//console.log(user.firstName);

//Callbacks -> funToCall is a callback function
function sum(num1, num2, funToCall) {
    funToCall ((num1 + num2));
    }
    
    function displayResult(data) {
    console.log("Result of the sum is : " + data);
    }
    
    function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
    }
    
    // You are only allowed to call one function after this
    // How will you displayResult of a sum
    
    //sum(4, 6, displayResult)

    function calculateArithmetic(a,b, funToCall)
    {
        return funToCall(a,b);
    }

    function sum(a,b)
    {
        return a+b;
    }

    function sub(a,b)
    {
        return a-b;
    }

    console.log(calculateArithmetic(4,5,sum)); 
    console.log(calculateArithmetic(4,5,sub));