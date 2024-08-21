function ContaBancaria(titular, saldo) {
  this.titular = titular;
  this.saldo = saldo;

  this.depositar = function (valor) {
    if (valor <= 0.99) {
      return console.log('Valor muito baixo, insira algo maior ou igual a R$1.00')
    } else {
      this.saldo += valor;
      console.log(`Seu depósito de R$${valor} foi concluido com sucesso!`);
    }
  },

  this.retirar = function (valor) {
    if (valor <= 0.99) {
      return console.log('Valor muito baixo, insira algo maior ou igual a R$1.00')
    } else if (this.saldo < valor) {
      return console.log('Não é possível retirar essa quantidade de dinheiro.')
    } else {
      this.saldo -= valor;
      console.log(`Sua retirada de R$${valor} foi concluida com sucesso!`);
    } 
  },

  this.consultarSaldo = function () {
    console.log(`O saldo de ${this.titular} é de R$${this.saldo}.`)
  }
};

let Andre = new ContaBancaria('André Wantil', 1.07);
Andre.depositar(30000);
Andre.consultarSaldo();
Andre.retirar(12000);
Andre.consultarSaldo();