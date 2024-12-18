const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Función para convertir la temperatura
function convertTemperature(value, fromUnit, toUnit) {
  let result;

  if (fromUnit === 'C' && toUnit === 'F') {
    result = (value * 9 / 5) + 32; // Celsius a Fahrenheit
  } else if (fromUnit === 'C' && toUnit === 'K') {
    result = value + 273.15; // Celsius a Kelvin
  } else if (fromUnit === 'F' && toUnit === 'C') {
    result = (value - 32) * 5 / 9; // Fahrenheit a Celsius
  } else if (fromUnit === 'F' && toUnit === 'K') {
    result = (value - 32) * 5 / 9 + 273.15; // Fahrenheit a Kelvin
  } else if (fromUnit === 'K' && toUnit === 'C') {
    result = value - 273.15; // Kelvin a Celsius
  } else if (fromUnit === 'K' && toUnit === 'F') {
    result = (value - 273.15) * 9 / 5 + 32; // Kelvin a Fahrenheit
  } else {
    result = 'Unidades no soportadas';
  }

  return result;
}

// Endpoint para convertir la temperatura
app.get('/convert', (req, res) => {
  const { value, fromUnit, toUnit } = req.query;

  if (value && fromUnit && toUnit) {
    const tempValue = parseFloat(value);
    if (isNaN(tempValue)) {
      return res.status(400).send('Valor de temperatura inválido');
    }
    const result = convertTemperature(tempValue, fromUnit, toUnit);
    return res.json({ result });
  } else {
    return res.status(400).send('Faltan parámetros. Debes proporcionar "value", "fromUnit" y "toUnit"');
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});