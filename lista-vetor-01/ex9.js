let num = [2, 4, 5, 6, 7, 8, 10, 12];
soma= 0;
for (i = 0; i < num.length; i++){
    if(num[i]>=10){
        soma = soma + num[i]
    }
} 
console.log(soma)