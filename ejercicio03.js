const persona1 = {
  nombre: 'Juan'
};

const persona2 = {
  nombre: 'María'
};

function saludar() {
  return `Hola, mi nombre es ${this.nombre}.`;
}

const saludo = saludar.call(persona2);

console.log(saludo);
