let detector = 'prime'
let num =37;
for(i=2;i<num;i++){
if(num%i==0){
detector='not prime';
break;
}
}
if(detector){
 console.log(num, detector);
}
else {console.log(num, detector)}