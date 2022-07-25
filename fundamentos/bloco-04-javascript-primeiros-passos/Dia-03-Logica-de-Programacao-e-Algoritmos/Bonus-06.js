let divisivel = 0;
let n = 47;


for (let divisor = 2; divisor < n; divisor += 1) {
    if (n % divisor === 0) divisivel += 1;
}

if (divisivel === 0) console.log(n + ' é primo.');
else if (divisivel !== 0) console.log(n + ' não é primo.')