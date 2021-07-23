const fact = (num) => {
let fact = 1;
    for(i=1;i<=num;i++) {
        fact *=i;
    }
    console.log(`1) factorial of ${num} is`+ ": "+ fact);
    console.log(" ");
    }

fact(5);

const largestNum = (a,b,c) => {
    console.log(`2) largest of three No's ${a} ${b} ${c}`);

    if(a>b){
        if(a>c){
            console.log(`The largest Number is: ${a}`);
        }else {
            console.log(`The largest Number is: ${c}`);
        }
    }else if(b>c){
        console.log(`The largest Number is: ${b}`);
    }
    else {
        console.log(`The largest Number is: ${c}`);
    }
    console.log(" ");
}
largestNum(155,246,159);

const SumNaturalNo = (num) => {
    let sum=0;
    for(i=1;i<=num;i++){
        sum = sum+i;
    }
    console.log(`3) Sum of Natural No's of 1 to ${num} is: ${sum}`);
    console.log(" ");
}
SumNaturalNo(10);

const FibbnonicSequence = (num) => {
    console.log("4) Fibbnonic Series upto 8 terms..")
    let a=0,b=1,next;
    console.log(a);
    console.log(b);
    for(i=2;i<num;i++) {
        next=a+b;
        console.log(next);
        a=b;
        b=next;
    }
    console.log(" ");
}
FibbnonicSequence(8);


const triangel = (b,h) => {
    let area = (1/2)*b*h;
    console.log(`5) area of triangel with base= ${b} and Height = ${h} is equal: ${area}`);
    console.log(" ");
}
triangel(4,5);
