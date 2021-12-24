const binaryField = document.querySelector('.binary-input');
const decimalField = document.querySelector('.decimal-input');


binaryField.addEventListener('keydown', valadtionForBinary); 
binaryField.addEventListener('keyup', divideIntoArray);

decimalField.addEventListener('keydown', valadtionForDecimal); 
decimalField.addEventListener('keyup', decimalToBinary);



// Binary To Decimal Down Below
function valadtionForBinary(object) {
    const keyPressed = object.keyCode || object.which;

    if (keyPressed == '96' || keyPressed == '97' || keyPressed == '48' || keyPressed == '49' || keyPressed == '8') {
        return  
    }   else {
        object.preventDefault();
    }
};

function divideIntoArray() {
    let arr = [];

    arr = Array.from(String(binaryField.value), Number);
    binaryToDecimal(arr);
}

function binaryToDecimal(arr) {
    let result = 0;
    let power = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        result = result + (Math.pow(2, power) * arr[i]);
        power = power - 1;
    }

    document.querySelector('.decimal-input').value = result;
}

function valadtionForDecimal(object) {
    const keyPressed = object.keyCode || object.which;

    if(keyPressed == '48' || keyPressed == '49' || keyPressed == '50' || keyPressed == '51'|| keyPressed == '52'|| keyPressed == '53'|| keyPressed == '54' || keyPressed == '55' || keyPressed == '56' || keyPressed == '57' || keyPressed == '8' || keyPressed == '96'|| keyPressed == '97'|| keyPressed == '98' || keyPressed == '99'|| keyPressed == '100'|| keyPressed == '101' || keyPressed == '102'|| keyPressed == '103'|| keyPressed == '104'|| keyPressed == '105') {
       return      
    } else {
        object.preventDefault();
    }
}

function decimalToBinary() {
    let number = decimalField.value;
    let array = [];

    do {
        array.push(number % 2);
        number = parseInt(number / 2);
        
    } while ((number / 2) >  0);

    let arr2 = [];

    let i, f;

    for(i = array.length - 1, j = 0; i <= 0, j <= array.length - 1; i--, j++) {
        arr2[j] = array[i];
    }

    console.log(arr2);

    binaryField.value = arr2.toString().replaceAll(',','');
}