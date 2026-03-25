let num = [2, 4, 5, 6, 7, 8, 10, 12];
qtd = 0;
for (i = 0; i < num.length; i++){
    if((num[i]%2)===0){
        qtd++
    }
} 
console.log(qtd)