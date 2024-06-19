const persona1 = {
  nombre: 'Carlos'
};

const persona2 = {
  nombre: 'Ana'
};

function presentar() {
  return `Hola, soy ${this.nombre}.`;
}

const presentacion = presentar.apply(persona2);

console.log(presentacion);
