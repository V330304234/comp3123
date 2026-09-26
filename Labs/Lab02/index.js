const gretter = (myArray) => {
    const greetText = 'Hello ';

    for (let name of myArray) {
        console.log(`${greetText}${name}`);
    }
};

gretter(['Randy Savage', 'Ric flair', 'Hulk Hogan']);

// const capitalize = (str) => {
//     const [first, ...rest] = str;
//     return first.toUpperCase() + rest.join('');
// };

// console.log(capitalize('foorBar'));
// console.log(capitalize('nodeJs'));

const colors = ['red', 'green', 'blue']

const capitalize = (str) => {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('');
};

const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors)
