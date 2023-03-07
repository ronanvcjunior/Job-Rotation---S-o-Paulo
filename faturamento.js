fetch('faturamento.json')
  .then(response => response.json())
  .then(data => {
    const faturamento = data.faturamento.filter(dia => dia.valor > 0);
    const valores = faturamento.map(dia => dia.valor);
    const datasFaturamentoMinimo = faturamento
      .filter(dia => dia.valor === Math.min(...valores))
      .map(dia => dia.dia);
    const datasFaturamentoMaximo = faturamento
      .filter(dia => dia.valor === Math.max(...valores))
      .map(dia => dia.dia);
    const mediaMensal = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
    const diasAcimaMedia = faturamento.filter(dia => dia.valor > mediaMensal);
    const numDiasAcimaMedia = diasAcimaMedia.length;
    const datasAcimaMedia = diasAcimaMedia.map(dia => dia.dia);
    console.log(`Faturamento mínimo: ${Math.min(...valores)}`);
    console.log(`Datas faturamento mínimo: ${datasFaturamentoMinimo}`);
    console.log(`Faturamento máximo: ${Math.max(...valores)}`);
    console.log(`Datas faturamento máximo: ${datasFaturamentoMaximo}`);
    console.log(`Faturamento médio: ${mediaMensal.toFixed(2)}`);
    console.log(`Número de dias acima da média: ${numDiasAcimaMedia}`);
    console.log(`Datas de faturamento acima da média: ${datasAcimaMedia}`);
  })
  .catch(error => console.error(error));