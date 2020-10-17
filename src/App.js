import React from 'react';
import logo from './logo.svg';
import './App.css';

function botao() {
const [indo, setVoltando]= useState ([])

function clickbotao(){
  setVoltando(['retorne'])
}


return <div>
<button type="button" onClick={clickbotao}>Ir para pagina</button>

{indo.map((pagi, index) =>(
  <p key={index}>{pagi}</p>

))}
</div>
}



  function cv (p) {
  return <div className="cv">
        <h3>{p.idioma1}</h3>
        <p>{p.idioma2}</p>
        <p>{p.texto}</p>
    </div>
  }
function cv2 (virtual){
return<div className="cv2">
  {virtual.map(l => cv(l))}
</div>}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          nave <code>espacial</code> não existe.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/vinicius.felipe.106902"
          target="_blank"
          rel="noopener noreferrer"
        >
          abestado
        </a>


      { cv2 ([
        {
          idioma1: 'Coreano',
          idioma2: '한국어',
          texto: '두루 다니며 한담하는 자는 남의 비밀을 누설하나 마음이 신실한 자는 그런 것을 숨기느니라'
        },

      { 
          idioma1:'japones',
          idioma2:'日本語',
          texto: '隣近所とけんかをするほど愚かなことはありません。賢い人は不必要なことは話しません'
      },
      {
        idioma1:'inglês',
        idioma2:'English',
        texto:'He that is void of wisdom despises his neighbor: but a man of understanding holds his peace.'
      }, 
      {
        idioma1:'Português',
        idioma2:'Português',
        texto:'O homem que não tem juízo ridicularizao seu próximo, mas o que tem entendimento refreia a língua.'
      }  

        

      ])}
      </header>
    </div>
  );
}

export default App;
