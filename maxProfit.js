/*const maxProfit = (arr) => {
  let result = 0;
  let profit = 0; 
  for (let i = 0; i < arr.length; i ++){
    for (let j = i+1; j < arr.length; j++){
      result = arr[j] - arr[i];
      if(profit<result){
        profit = result;
      }
    }
  }
  if (profit < 0){
    return -1
  }
  else {
    return profit;
  }
}
*/

const maxProfit = (arr) => {
  let maxPrice = arr[0];
  let minPrice =arr[0];
  let profit = 0;
  for (let i = 0; i < arr.length ; i ++){
    if (arr[i] > maxPrice){
      maxPrice = arr[i];
    }
    if (arr[i] < minPrice){
      minPrice = arr[i];
      maxPrice = 0;
    }
    if (profit < (maxPrice - minPrice)) {
      profit = (maxPrice - minPrice);
    }
  }
  console.log(profit);
}

//const arr1=[45, 24, 35, 31, 40, 38, 11];
const arr1=[40,40,30,20,10];
maxProfit(arr1)