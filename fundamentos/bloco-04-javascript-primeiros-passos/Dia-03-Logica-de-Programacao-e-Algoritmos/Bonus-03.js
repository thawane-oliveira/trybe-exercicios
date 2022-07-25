let n = 6;
let asterisco = '*';
let linha = '';
let espaco = n - 1;

for (let index = 0; index < n; index +=1 ) {
for (let coluna = 0; coluna < n; coluna +=1) {
if (coluna < espaco) {
    linha = linha + ' ';
} else {
linha = linha + asterisco;
}
} console.log(linha);
linha = '';
espaco -= 1;
};
