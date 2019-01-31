function reverseArray(a)
{
 let arr = [], j=0;
  for(i=a.length-1;i>=0;i--)
  {
  arr[j] = a[i];
    j++;
}
  return arr;
}
function reverseArrayInPlace(arr){
  let arr1 = [], j=0;
  for(var i = arr.length - 1; i >= 0; i--){
    arr1[j] = arr[i];
    j++;
  }
  return arr1;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
arrayValue=reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]