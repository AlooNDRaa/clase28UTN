document.getElementById('conversionForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Obtener los valores del formulario
    const fromUnit = document.getElementById('fromUnit').value;
    const value = document.getElementById('value').value;
    const toUnit = document.getElementById('toUnit').value;
  
    // Hacer la solicitud al servidor
    fetch(`/convert?value=${value}&fromUnit=${fromUnit}&toUnit=${toUnit}`)
      .then(response => response.json())
      .then(data => {
        const result = data.result;
        document.getElementById('result').innerHTML = `${value}°${fromUnit} equivale a ${result}°${toUnit}`;
      })
      .catch(error => {
        document.getElementById('result').innerHTML = 'Error al convertir. Asegúrate de que todos los campos sean correctos.';
      });
  });