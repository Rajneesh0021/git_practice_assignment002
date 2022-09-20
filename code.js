let flag = 'prime'
let num =12;
for(i=2;i<num;i++){
if(num%i==0){
flag='not prime';
break;
}
}
if(flag){
 console.log(num, flag);
}
else {console.log(num, flag)}