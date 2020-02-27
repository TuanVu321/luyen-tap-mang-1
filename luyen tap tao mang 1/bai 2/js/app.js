let number = [10,5,69,8,78,4,36,52,86,15,55];
let max = number[0];
for(i=1;i<number.length;i++){
    if(number[i]>max){
        max=number[i];
    }
}
alert('so lon nhat la: ' + max);