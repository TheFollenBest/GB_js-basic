'use strict'

// Exercise 1
function Exercise_1(){
    //пример 1
    let a = 1, b = 1, c, d;
    c = ++a; // значение "a" увеличится на один, потом запишется в "c"
    alert(c); // ответ: 2
    //пример 2
    d = b++; // значение "b" запишется в "d", потом увеличится на один
    alert(d); //ответ: 1
    //пример 3
    c = 2 + ++a; // в примере 1 "a" увеличилась на один, затем в примере 3 снова увеличилась на один и складывается с 2
    alert(c); //ответ: 5
    //пример 4
    d = 2 + b++; // в примере 2 "b" увеличилась на один, затем в примере 4 сначала идет сложение 2 + b, потом результат увеличивается на один
    alert(d); //ответ: 4
    alert(a); //3
    alert(b); //3
}
Exercise_1();

// Exercise 2
function Exercise_2(){
    let a = +prompt('Введите число a');
    let b = +prompt('Введите число b');
 
    if(a >= 0 && b >= 0){
        alert(a - b);
    }
    else if(a < 0 && b < 0){
        alert(a * b);
    }
    else{
        alert(a + b);
    }
}
Exercise_2();

// Exercise 3
function Exercise_3(){
    let a = +prompt('Введите число a');
    let b = +prompt('Введите число b');

    function addition(a, b){
        return a + b;
    }
    alert(addition(a, b));

    function subtraction(a, b){
        return a - b;
    }
    alert(subtraction(a, b));

    function multiplication(a, b){
        return a * b;
    }
    alert(multiplication(a, b));
    
    function division(a, b){
        return a / b;
    }
    alert(division(a, b));
}
Exercise_3();

// Exercise 4
function Exercise_4(){
    let a = +prompt('Введите число a');
    let b = +prompt('Введите число b');
    let operation = prompt('Введите операцию');

    function addition(a, b){
        return a + b;
    }

    function subtraction(a, b){
        return a - b;
    }

    function multiplication(a, b){
        return a * b;
    }
    
    function division(a, b){
        return a / b;
    }
    function mathOperation(arg1, arg2, operation){
        switch (operation) {
            case "+":
                return addition(arg1, arg2);
            case "-":
                return subtraction(arg1, arg2);
            case "*":
                return multiplication(arg1, arg2);
            case "/":
                return division(arg1, arg2);
            default:
                throw new Error('Операция ' + operation + ' не существует')
        }
    }
    alert(mathOperation(a, b, operation));
}
Exercise_4();
