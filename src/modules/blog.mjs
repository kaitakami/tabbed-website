import * as UI from './UI.mjs';

export { renderContent };

const mainContainer = document.getElementById('container');
const blogContent = [
  '<h1>Introducción</h1>Antes de iniciar a aprender de blockchain te recomendas tener mínimos conocimientos de Bitcoin, descentralización, criptografía y qué es una base de datos. Si tienes preguntas no dudes en preguntar en la comunidad de Web3 Aprende 👇',
  (`<h1>¿Qué es blockchain?</h1>Una blockchain o en español cadena de bloques es una base de datos distribuida que se comparte entre los nodos de una red informática. Como una base de datos, blockchain almacena información electrónicamente en formato digital. Las cadenas de bloques son más conocidas por su papel crucial en los sistemas de criptomonedas, como Bitcoin, para mantener un registro seguro y descentralizado de las transacciones. La innovación de una cadena de bloques es que garantiza la fidelidad y seguridad de un registro de datos y genera confianza sin necesidad de un tercero.<br>
Una diferencia clave entre una base de datos típica y una blockchain es cómo se estructuran los datos. Una cadena de bloques reúne la información en grupos, conocidos como bloques, que contienen conjuntos de información. Los bloques tienen cierta capacidad de almacenamiento y, cuando se llenan, se cierran y se vinculan al bloque previamente llenado, formando una cadena de datos conocida como blockchain. Toda la información nueva que sigue a ese bloque recién añadido se compila en un bloque recién formado que, una vez lleno, también se añadirá a la cadena.<br>
Una base de datos suele estructurar sus datos en tablas, mientras que una cadena de bloques, como su nombre indica, estructura sus datos en trozos (bloques) que se encadenan. Esta estructura de datos hace inherentemente una línea de tiempo irreversible de los datos cuando se implementa en una naturaleza descentralizada. Cuando un bloque se llena, queda grabado en piedra y pasa a formar parte de esta línea temporal irreversible. Cada bloque de la cadena recibe una marca de tiempo exacta cuando se añade a la cadena.`),
  (`<h2>Lecturas recomendadas</h2>
<ul>
<li><a href="https://www.investopedia.com/terms/b/blockchain.asp" target="_blank">https://www.investopedia.com/terms/b/blockchain.asp</a> (Fuente - Source Investopedia)</li>
<li><a href="https://bitcoin.org/files/bitcoin-paper/bitcoin_es.pdf" target="_blank">https://bitcoin.org/files/bitcoin-paper/bitcoin_es.pdf</a></li>
<li><a href="https://www.youtube.com/watch?v=hEoYL5j0wYU" target="_blank">https://www.youtube.com/watch?v=hEoYL5j0wYU</a></li>
<li><a href="https://www.youtube.com/watch?v=V9Kr2SujqHw&t=140s" target="_blank">https://www.youtube.com/watch?v=V9Kr2SujqHw&t=140s</a></li>
<li><a href="https://www.ibm.com/es-es/topics/what-is-blockchain" target="_blank">https://www.ibm.com/es-es/topics/what-is-blockchain</a></li>
<li><a href="https://www.xataka.com/especiales/que-es-blockchain-la-explicacion-definitiva-para-la-tecnologia-mas-de-moda" target="_blank">https://www.xataka.com/especiales/que-es-blockchain-la-explicacion-definitiva-para-la-tecnologia-mas-de-moda</a></li>
</ul> 
<h2>Inglés</h2>
<ul>
  <li><a href="https://michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/" target="_blank">https://michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/</a></li>
  <li><a href="https://www.youtube.com/watch?v=_160oMzblY8" target="_blank">https://www.youtube.com/watch?v=_160oMzblY8</a></li>
  <li><a href="https://www.youtube.com/watch?v=S9JGmA5_unY" target="_blank">https://www.youtube.com/watch?v=S9JGmA5_unY</a></li>
  <li><a href="https://www.youtube.com/watch?v=Lx9zgZCMqXE" target="_blank"><a href="">https://www.youtube.com/watch?v=Lx9zgZCMqXE</a></li>
</ul>`)];

const renderContent = (index) => {
  UI.clearContent(mainContainer);
  mainContainer.innerHTML = `
  <div class="prose w-screen pt-10 pb-9 flex flex-col m-auto justify-center px-3">
    ${blogContent[index]}
    <div class="flex justify-between">
      <button id="pre-btn-${index}" class="btn btn-primary m-auto">Previous</button>
      <button id="next-btn-${index}" class="btn btn-primary m-auto">Next</button>
    <div>
  </div>`;

  const preBtn = document.getElementById(`pre-btn-${index}`);

  const showPreBlog = () => {
    if (index === 0) {
      alert('Este es el primer blog');
    } else {
      renderContent(index - 1);
    }
  };

  preBtn.addEventListener('click', () => showPreBlog());

  const nextBtn = document.getElementById(`next-btn-${index}`);
  const showNextBlog = () => {
    if (index === 2) {
      alert('Este es el último blog, gracias por leer :)');
    } else {
      renderContent(index + 1);
    }
  };

  nextBtn.addEventListener('click', () => showNextBlog());
};
