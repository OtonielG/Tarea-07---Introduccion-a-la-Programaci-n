const auto = {
  marca: 'Toyota',
  mostrarMarca: function() {
      return `La marca del auto es ${this.marca}.`;
  }
};

const moto = {
  marca: 'Honda'
};

const mensaje = auto.mostrarMarca.call(moto);

console.log(mensaje);
