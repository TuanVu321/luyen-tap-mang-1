let number = [1,2,5,10,65,8,7,36,55,10];
let count = 0;
for(let i=0;i<number.length;i++){
    if(number[i]>=10){
        count++
    }
}
alert('trong mang co '+count+' phan tu lon hon hoac bang 10');