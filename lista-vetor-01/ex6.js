let nums = [3, 4, 5, 10, 7, 8];
let menor= nums[0];
for (i = 0; i< nums.length; i++){
    if(nums[i] < menor){
        menor= nums[i]
    }

}
    console.log("menor", menor);