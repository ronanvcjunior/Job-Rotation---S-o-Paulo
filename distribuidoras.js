fetch('distribuidoras.json')
  .then(response => response.json())
  .then(data => {
    const valores = Object.values(data);
    const total = valores.reduce((acc, cur) => acc + cur, 0);

    for (const estado in data) {
      const percentual = ((data[estado] / total) * 100).toFixed(2);
      const valorFormatado = data[estado];
      console.log(`${estado} - ${valorFormatado} (${percentual}%)`);
    }
  })
  .catch(error => console.log(error));