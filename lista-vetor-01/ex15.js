let a = [1, 2, 3, 4, 5, 6];
crescente = true;
for (i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {
        crescente = false;
    }
}
if (crescente) {
    console.log("crescente");
} else {
    console.log("não crescente");
}