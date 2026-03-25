let nums = [3, 4, 5, 10, 7, 8];
let maior = 0;
for (i = 0; i< nums.length; i++){
    if(nums[i] > maior){
        maior= nums[i]
    }
}
console.log("maior", maior);