let number = [1,2,3,5,7,8,-9,-7,-10,-6];
let count = 0;
for(i=0;i<number.length;i++){
    if(number[i]<0){
        count++
    }
}
alert('ham co '+count+' so nguyen am.');