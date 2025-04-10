import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import "./styles.css";
import marco_zero_img from "./assets/marco_zero.jpg"
import instituto_ricardo_brennand_img from "./assets/instituto_ricardo_brennand.jpg"
import parque_das_esculturas from "./assets/parque_das_esculturas.jpg"
import estelita from "./assets/estelita.jpg"
import rua_da_moeda from "./assets/rua_da_moeda.jpg"
import alto_da_se from "./assets/alto_da_se.jpg"

const pontosTuristicos = [
  {
    id: "1",
    nome: "Marco Zero — O Coração do Mangue",
    descricao: "Esse é o ponto de partida, literalmente. O Marco Zero é onde tudo começa e tudo ferve: palcos de carnaval, maracatu latejando, e o cheiro de maresia misturado com ideias revolucionárias. Aqui, Chico Science já deu o recado com suas letras cortantes, e o mangue virou símbolo. Do lado, esculturas de Brennand e o oceano encontrando o Capibaribe — é arte, cultura e resistência brotando do chão de pedra.",
    endereço: "Endereço: Praça Rio Branco - Recife-PE, 50030-230",
    curiosidade: "Por que é manguebeat? Porque é o epicentro do movimento, onde Recife gritou pro mundo que tinha um cérebro eletrônico plugado num caranguejo.",
    imagem: marco_zero_img
  },
  {
    id: "2",
    nome: "Rua da Moeda — O QG da Lama Sonora",
    descricao: "Sabe aquele lugar onde você sente que pode trombar com uma banda tocando embolada com sampler no meio da rua? Pois é, a Rua da Moeda é esse lugar. Antiga, charmosa e pulsante, aqui os bares são vitrines do underground recifense, e as calçadas têm mais histórias que muito museu.",
    endereço: "Endereço: R. da Moeda - Recife-PE, 50030-230",
    curiosidade: "Por que é manguebeat? Porque era (e é) ponto de encontro da galera mangue. Onde se tramava som, arte e revolução. Bebida na mão, ideia na cabeça e o som dos tambores no peito.",
    imagem: rua_da_moeda
  },
  {
    id: "3",
    nome: "Parque das Esculturas de Francisco Brennand — Mangue em Forma de Pedra",
    descricao: "Do outro lado do Marco Zero, atravessando de barquinho, você chega num parque surreal. As esculturas brotam da água como se fossem totens de outra dimensão. Uma mistura de misticismo, natureza e urbanismo — parece cenário de um clipe do Nação Zumbi.",
    endereço:"Av. Brasília Formosa - Brasília Teimosa, Recife - PE, 51010-145",
    curiosidade: "Por que é manguebeat? Porque é arte com cheiro de mangue, misturando barro, história e imaginação — tudo que o manguebeat sempre fez com som.",
    imagem: parque_das_esculturas
  },
  {
    id: "4",
    nome: "Bar Estelita — Resistência com Guitarra na Veia",
    descricao: "O Estelita não é só um bar — é trincheira, é palco, é barricada cultural. De dia parece um galpão abandonado, à noite vira santuário do som marginal. Por lá já passaram bandas, poetas, performers, DJs e todo tipo de criatura do mangue. A galera senta na calçada, toma uma gelada e discute o mundo — do underground ao alto-falante.",
    endereço: "Av. Saturnino de Brito, 385 - Cabanga, Recife - PE, 50090-310",
    curiosidade: "Por que é manguebeat? Porque representa tudo que o movimento defende: arte independente, crítica social e o direito à cidade. O Estelita lutou (e luta) contra a especulação imobiliária e é símbolo de resistência criativa em Recife. Se o caranguejo do mangue tivesse uma cervejaria, seria aqui.",
    imagem: estelita
  },
  {
    id: "5",
    nome: "Instituto Ricardo Brennand — Um Castelo no Fim do Mangue",
    descricao: "No meio de um bosque encantado em plena Várzea, ergue-se um castelo que parece ter saído de um sonho medieval. O Instituto Ricardo Brennand é arte em escala épica: armaduras, pinturas, esculturas e um acervo que vai de Frans Post a armas centenárias. Tudo envolto por jardins milimetricamente selvagens. É um mergulho num Recife que se conecta com o mundo, mas com os pés fincados no barro da sua história.",
    endereço: "R. Mário Campelo, 700 - Várzea, Recife - PE, 50741-904",
    curiosidade: "Por que é manguebeat? Porque é uma explosão de estética, mistura o velho com o novo e transforma cultura em resistência silenciosa. Se o manguebeat tem raízes, aqui é onde ele dialoga com o passado pra moldar o futuro.",
    imagem: instituto_ricardo_brennand_img
  },
  {
    id: "6",
    nome: "Alto da Sé — O Mirante do Frevo e da Fé",
    descricao: "Subindo as ladeiras de Olinda, você chega ao topo onde o tempo para e a vista abraça o Recife inteiro. O Alto da Sé é onde o batuque ecoa forte no chão de pedra colonial, misturando o som das ladeiras com o cheiro de tapioca feita na hora. Aqui tem feira, tem arte, tem igreja antiga e tem por do sol que parece milagre. Um lugar onde o sagrado e o profano dançam frevo juntos.",
    endereco:"R. Bpo. Coutinho, s/n - Alto da Sé, Olinda - PE, 53120-130",
    curiosidade: "Por que é manguebeat? Porque do alto se vê tudo — inclusive a beleza da mistura. O mangue pulsa aqui também, entre as ladeiras históricas e as antenas de TV captando o som das alfaias.",
    imagem: alto_da_se
  }
  
];

function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("login");

  const toggleForm = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">MangueTour</h1>
      <div>
        <button onClick={() => toggleForm("login")}>Login</button>
        <button onClick={() => toggleForm("cadastro")}>Cadastro</button>
      </div>
      {showForm && (
        <div className="form-box">
          <h2>{formType === "login" ? "Login" : "Cadastro"}</h2>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button>{formType === "login" ? "Entrar" : "Cadastrar"}</button>
        </div>
      )}
    </nav>
  );
}


function Home() {
  return (
    <div className="container">
      <h1>Locais</h1>
      <ul>
        {pontosTuristicos.map(ponto => (
          <li key={ponto.id}>
            <Link to={/detalhes/${ponto.id}}>
              <img src={ponto.imagem} alt={ponto.nome} className="imagem-ponto" />
              <h2>{ponto.nome}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Detalhes() {
  const { id } = useParams();
  const ponto = pontosTuristicos.find(p => p.id === id);
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");

  const handleComentario = () => {
    if (!novoComentario) return;
    setComentarios([...comentarios, novoComentario]);
    setNovoComentario("");
  };

  if (!ponto) return <p>Local não encontrado.</p>;

  return (
    <div className="container">
      <h1>{ponto.nome}</h1>
      <img src={ponto.imagem} alt={ponto.nome} className="imagem-ponto" />
      <p>{ponto.descricao}</p>
      <p>{ponto.curiosidade}</p>
      <p>{ponto.endereço}</p>
      <h3>Comentários</h3>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <textarea placeholder="Deixa teu rastro no mangue" value={novoComentario} onChange={e => setNovoComentario(e.target.value)} />
      <button onClick={handleComentario}>Enviar</button>
      <Link to="/" className="botao">Voltar</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </Router>
  );
}

export default App;
