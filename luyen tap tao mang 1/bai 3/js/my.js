let number = [10,5,69,8,78,4,36,52,86,15,55];
let max = number[0];
let tb = 0;
let sum = 0;
for(i=1;i<number.length;i++){
    if(number[i]>max){
        max=number[i];
    }
}
for(i=0; i<number.length;i++){
    sum += number[i];
}
tb=sum/(number.length);
alert(max + ' la so lon nhat');
alert('gia tri tb trong bang la: '+ tb);