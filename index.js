const fact = () => {
   let num = document.getElementById("input").value;
let fact = 1;
    for(i=1;i<=num;i++) {
        fact *=i;
    }
    // console.log(`factorial of ${num} is`+ ": "+ fact);
    // document.write(`<h2>factorial of ${num} is: ${fact}</h2>`);
    document.getElementById("result").value = fact;
    }

// fact(5);

const largestNum = () => {
    let a,b,c;
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    if(a>b){
        if(a>c){
            // console.log(`The largest Number is: ${a}`);
            document.getElementById("result1").value=a;
        }else {
            // console.log(`The largest Number is: ${c}`);
            document.getElementById("result1").value=c;
        }
    }else if(b>c){
        // console.log(`The largest Number is: ${b}`);
        document.getElementById("result1").value=b;
    }
    else {
        // console.log(`The largest Number is: ${c}`);
        document.getElementById("result1").value=c;
    }
}
// largestNum(155,246,159);

const SumNaturalNo = () => {
    let num = document.getElementById('nat').value;
    let sum=0;
    for(i=1;i<=num;i++){
        sum = sum+i;
    }
    // console.log(`Sum of Natural No's of 1 to 50 is: ${sum}`);
    document.getElementById('result2').value = sum;
}
// SumNaturalNo();

const FibbnonicSequence = () => {
    let num = document.getElementById("fib").value;
    // console.log("Fibbnonic Series upto 8 terms..")
    let a=0,b=1,next;
    // console.log(a);
    // console.log(b);
    document.write( `Fibbnonic Series upto ${num} terms:  `);
    document.write(` ${a}`);
    document.write(` ${b}`);
    for(i=2;i<num;i++) {
        next=a+b;
        // console.log(next);
        // document.getElementById('result3').value = next;
        document.write(` ${next}`);
        a=b;
        b=next;
    }
}
// FibbnonicSequence(8);


const triangel = () => {
    let b,h;
    b = document.getElementById('b1').value;
    h = document.getElementById('h').value;
    let area = (1/2)*b*h;
    document.getElementById('result3').value = area;
}