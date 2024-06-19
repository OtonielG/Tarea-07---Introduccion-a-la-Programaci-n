const cuentaBancaria = {
  titular: 'Juan Pérez',
  saldo: 1000
};

function actualizarSaldo(monto) {
  this.saldo += monto;
}

const monto = 500;

actualizarSaldo.apply(cuentaBancaria, [monto]);

console.log(cuentaBancaria);

