function isPrime(num){
    for(let i=2; i<num; i++){
        if(num%i==0){
        return false;
        }
    }
return num>1;
}

function factorial(num){
    let sum=1
    for(let i=1; i<=num; i++){
        sum=sum*i
    }
return sum;
}

function fib(num){
    let sum=0;
    let fib1=1;
    let fib2=1;
    if(num<=0){
        return false
    }
    for(let i=1; i<=num; i++){
        fib1=sum
        sum=fib1+fib2
        fib2=fib1
    }
    return sum
}
function reverse(str){
    let reversed=""
    for(let i=str.length-1; i>=0; i--){
        reversed+=str[i]
    }
return reversed;
}
console.log("hello, world!")
console.log("isPrime 13? ", isPrime(13))
console.log("7!= ", factorial(7))
console.log("fib 20= ", fib(20))
console.log("!dlrow ,olleh <=>", reverse('!dlrow ,olleh'))