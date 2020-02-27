let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = parseInt(prompt('nhap so nguyen v'));
if (array.indexOf(number) == -1) {
    array.push(number);
} else {
    let i = array.indexOf(number);
    array.splice(i, 1);
}
alert(array);