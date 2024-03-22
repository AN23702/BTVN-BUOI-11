// Bài 1
let number = (a) => {
    if (a % 3 == 0 && a % 5 == 0) {
        console.log("FixxBuzz");
    } else if (a % 3 == 0) {
        console.log("Fizz");
    } else if (a % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log("no result")
    }
}

number(15);


// Bài 2
let firstDegreeEquation = (a,b) => {
    console.log(`Giải phương trình ${a}x + ${b} = 0`);
    if (a == 0 && b == 0) {
        console.log("Vô số nghiệm");
    } else if (a == 0 && b != 0) {
        console.log("vô nghiệm");
    } else {
        console.log(`Nghiệm x = ${-b/a}`)
    }
}

firstDegreeEquation(3,6);


// Bài 3
let quadratic = () => {

}

quadratic();