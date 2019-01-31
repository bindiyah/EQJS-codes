function range(a, b, c){
 let arr=[];
 if(a>b && c<0){
     let a1= a;
     d= a-b;
     for(let i=0; i<=d; i++){
       arr[i]=a1;
       a1--;
   }
 } else if(a>b && c>1){
   let a1=a;
   d=a+b;
   for(let i=0; i<=d; i++){
     arr[i]=a1;
     a1+=c;
   }
 }
 else{
     for(let i=0; i<b; i++){
     arr[i]=a;
     a++;
     }
   } return arr;
}
function sum(a){
 return a.reduce((a1, a2) => a1+a2);
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55