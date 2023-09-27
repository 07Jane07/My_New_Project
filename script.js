// let test1 = +prompt("Test 1");
// let test2 = +prompt("Test 2");


// let additionResult = test1 + test2;
// let substractinResult = test1 - test2
// let multiplicationResult = test1 *  test2
// let divisionResult = test1 / test2

// alert(`Addition Result: ${additionResult}
//        Substraction Result: ${substractinResult}
//        Multiplication Result: ${multiplicationResult}
//        Division Result: ${divisionResult} 
//     `);

// let c = +prompt("Tselsiy bo'yicha harorat qiymatini kiriting");
// let f = (c * 9/5) + 32;
// let k = c + 273.15

// alert(`Farangeytdagi harorat: ${f}
//        Kelvindagi harorat: ${k}
// `)



//13.09.2023

//First Task
// let k = 0;

// while(k <= 10) {
//        console.log(k * 2);
//        k++;
// }


//Second Tsk

// let b = 0;
// let c = 0
// for(let a = 0; a <100; a++) {
//   if(a % 2 === 0)
//     b += a + 2
// }

//  console.log(b);       
       



// let a = +prompt("Enter first number")
// let b = +prompt("Enter second number")
// let c;
// switch (enterDay) {
//        case c = a + b:
//               c = "Sunday"
//               break;

//        // case 1:
//        //        day = "Monday"
//        //        break;       
//        // case 2:
//        //        day = "Tuesday"
//        //        break;       
//        // case 3:
//        //        day = "Wednesday"
//        //        break;  
//        // case 4:
//        //        day = "Thuersday"
//        //        break;               
//        // case 5:
//        //        day = "Friday"
//        //        break; 
//        // case 6:
//        //        day = "Saturday"
//        //        break;                                                        
//        // default:
//        //        break;
// }

// alert(`${c}`)








//14.09.2023

//Task 1

// let k = 0;
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
// for (const num of numbers) {
//     k += num;

// }
// console.log(k);

//Task 2

// let avto = ["Nexia", "Jentra", "Damas", "Coptiva", "Malibu", "Spark", "Matis",
//             "Onix", "Tracer", "Cobalt", "Lacette", "Tahoe" ];


// for (let i = 0; i < avto.length; i++) {
//   console.log(avto[i]);
// }


//Task 3

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
// numbers.forEach(numbers => {
//   console.log(numbers * 2)
// })

//Task 4


// let numbers = [2, -4, -5, -8, -3, -11, 9, -23, -50];

// for(key of numbers) {
//     console.log(Math.abs( key ))
// }


//Task 5

// let js = "Javascript";
// js.split('');
// js.split('').reverse();
// js.split('').reverse().join();
// for (key of js) {
//     console.log(`${key}-`)
//     js.join()
// }





// Task Calculator


// let result;

// const number1 = parseFloat + prompt('Enter the first number ');
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// const number2 = parseFloat(prompt('Enter the second number: '));
// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         alert(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         alert(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         alert(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         alert(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         alert('Invalid operator found');
//         break;
// }


//15.09.2023


// let password = prompt("Enter your password");

// for(let i = 0; i < 1; i++) {

// if(password.length < 8) { 

//     alert(`Error: Password must be at least 8 characters`); 
//     password = prompt("Again enter your password");
//     i--;
    
//     } else if(password.search(/[a-z]/) < 0) { 
    
//     alert("Error: Password must contain at least one lowercase letter"); 
//     password = prompt("Again enter your password");
//     i--;

//     } else if(password.search(/[A-Z]/) < 0) { 
    
//     alert("Error: Password must contain at least one uppercase letter"); 
//     password = prompt("Again enter your password");
//     i--;

//     } else if(password.search(/[0-9]/) < 0) { 
    
//     alert("Error: Password must contain at least one number"); 
//     password = prompt("Again enter your password");
//     i--;

//     } else { 
    
//     alert("Success!"); 
    
//     }
// }


//18.09.2023

//Task 1

// let s = 0;
// let total_sales = [500, 1000, 200, 150, 5, 6]
// for(total of total_sales) {
//     s += total;
// }

// a = s / 6;
// let p = a.toFixed();

// let max = Math.max.apply(null, total_sales);
// let min = Math.min.apply(null, total_sales);

// alert(`Total sales: ${s}
// Averages of sales: ${p} 
// Maximum sales: ${max}
// Minimum saes ${min}`
// )


//19.09.2023

// const array = [1, 2, 4, 56, 8, 9, 0, 6, 7, 9, 10]

// const oddNumbers = array.filter(numbers => numbers % 2 === 1);


// console.log(oddNumbers);

//20.09.2023

//Task 1
// function square(a, b) {
//     let result = a * b;
//     console.log(result);
//     return result;
// }

// square(5, 3);

//Task 2

// function squareAndParametr (a, b) {
//     let s = a * b;
//     let p = 2 * (a + b);
//     return alert(`Yuzasi: ${s} Parametri: ${p}`);
// }

// squareAndParametr(5, 7);

//Task 3

// const sales = [200, 400, 650, 150, 730, 320 ,540, 250, 200, 130]

// function sum () {
//     let s = 0;
//     for(total_sales of sales) {
//             s += total_sales;
//         }

//         return alert(s);
// }

// sum();



// 21.09.2023

// Task 1

// function diffrenceArray (arr1, arr2) {
//     var newArr = [];

//     function compare(first, second) {
//         first.forEach(number => {
//             if(second.indexOf(number) === -1) { newArr.push(number) }
//         });   
//     }

//     compare(arr1, arr2);
//     compare(arr2, arr1);
//     return newArr;

// }

// alert(diffrenceArray(
//      [6, 1, 3, 4, 6, 2],
//      [3, 6, 6, 0, 1, 2]
// ));


// Task 2

// const list = [1, 3, 4, 4, 2]

// function removeCopy (array) {
//     return array.filter((el, index) => array.indexOf(el) === index);
// }

// console.log(removeCopy(list));

// Task 3

// const number = prompt("Enter your number")
// let element = 0;
// for (let i = number; i < 0; i--) {
//     element =+ i;
//     return console.log(element);
// }



// Task 4

// const calculateAge = (dob) => {
//     const birthDate = new Data(dob);
//     const dateOf = Date.now() - birthDate.getTime();
//     const ageYear = new Date(dateOf);
//     return Math.abs(ageYear.getUTCFullYear() - 2000);
// };

// const dateOfBirtday = prompt("Enter your age");
// alert("Result", calculateAge(dateOfBirtday));





// exercise

// Task 1

// function test (firstname, lastname, age) {
//     return alert("Hello " + firstname + " " + lastname + " " + age);
// }

// test(prompt("Enter your Firstname"), prompt("Enter your Lastname"), prompt("Enter your Age"));


// Task 2

// function dateBirth(age) {
//     return alert("Your birthday is " + (2023 - age));
// }

// dateBirth(prompt("Enter your age"));

// task 3

// function compare(firstNumber, secondNumber) {
//     if (firstNumber > secondNumber){
//         alert("The highest number is: " + firstNumber);
//     }
//     if (firstNumber < secondNumber) {
//         alert("The highest number is: " + secondNumber);
//     }

// }

// compare(+prompt("Enter first number"), +prompt("Enter second number"));



// oddOrEven(+prompt("Enter your number"))

// 22.09.2023

// Task 1

// function oddOrEven (number) {
//     if (number % 2 == 0) {
//         alert("Your number is Even")
//     }
//      else {
//         alert("Your number is Odd")
//     }
// }

// oddOrEven(+prompt("Enter your number:"))

// Task 2

// function loopNumber() {

//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }

// loopNumber();



// Task 3

// function loopNumber() {

//     for (let i = 10; i > 0; i--) {
//         console.log(i);
//     }
// }

// loopNumber();


// Task 4

// function root(number) {
//     return alert(number ** 2);
// }

// root(+prompt("Enter your number:"))


// Task 5

// let l = prompt("Enter Your Name:");

// function nameReverse(remake) {
//     return alert(remake.split("").reverse().join(""));
// }

// nameReverse(l);


// 26.09.2023

// Task 1

// let a = prompt("Enter your word");
// let result = a.length;
// alert(result);

// Task 2

// let a = prompt("Enter your word");
// let result = a.slice(0, 1);
// alert(result);

// Task 3

// let a = [8, 5, 7, 2, 4 , 6];
// let result = a.sort();
// alert(result);

// Task 4

// let a = prompt("Enter your word");
// let result = a.split("").reverse().join("");
// alert(result);

// Task 5

// let a = +prompt("Enter your word");
// let result = a ** 2;
// alert(result);

// Task 6

// let a = +prompt("Enter your word");
// let b = +prompt("Enter your word");
// let result = a % b;
// alert(result);

// Task 7

// let a = +prompt("Enter your word");
// let b = +prompt("Enter your word");
// if (a > b) {
//     alert(b);
// }
// else if (a = b) {
//     alert("Sonlar Teng!")
// } 

// Task 8

// let a = [];
// let result = a.length;
// alert(result)

// Task 9

// let a = [5000, 2, 15, 50];
// alert(a);

// Task 10

// let a = ["HP", "Samsung", "LG", "Apple", "Toshiba"];
// alert(a);

// Task 11

// let a = ["HP", 80, "Samsung", 50, "LG", 100, "Apple", 90, "Toshiba"];
// alert(a);

// 27.09.2023

// Task 1
// function oddOrEven (number) {
//     if (number % 2 == 0) {
//         alert("Your number is Even")
//     }
//      else {
//         alert("Your number is Odd")
//     }
// }

// oddOrEven(+prompt("Enter your number:"));


// Task 2
// function oddOrEven (name) {
//     if (name.length >= 5) {
//         alert("Your name is long than 5!")
//     }
//      else {
//         alert("Your entered correct!")
//     }
// }

// oddOrEven(prompt("Enter your name:"));

// Task 3
// function oddOrEven (age) {
//     if (age >= 18) {
//         alert("Your age is enough!")
//     }
//     if (age == 18) {
//         alert("Your age is enough!")
//     }
//      else {
//         alert("You don't have permession!")
//     }
// }

// oddOrEven(+prompt("Enter your age:"));

// Task 3

// let numbers = +prompt("Enter your number:");
// if (number > 1) {
//     alert("Musbat")
// }
// if (number < 1) {
//     alert("Manfiy")
// }


