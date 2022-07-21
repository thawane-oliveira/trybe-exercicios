let INSS;
let aliquotaIR;

const salarioBruto = 4000.00;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11;
} else {
    INSS = 570.88;
}

const salarioBase = salarioBruto - INSS;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

console.log("SalárioLíquido: " + (salarioBase - aliquotaIR));
