import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = (type: string) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const repertorio = [
    {
      titulo: "Tu És Santo",
      autor: "Vineyard",
      letra: "Tu és santo, poderoso, digno de louvor...",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      tom: "D",
      compasso: "4/4"
    }
  ];

  const escalas = [
    {
      data: "Domingo - 30/06",
      equipe: "Banda 1",
      louvor: ["Tu És Santo"]
    }
  ];

  if (!isLoggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login - Semeadores</h2>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>
          <button onClick={() => handleLogin("musico")}>Entrar como Músico</button>
          <button onClick={() => handleLogin("cantor")}>Entrar como Cantor</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Semeadores - Bem-vindo, {username} ({userType})</h1>
      <h2>🎵 Repertório</h2>
      {repertorio.map((m, i) => (
        <div key={i}>
          <h3>{m.titulo} - {m.autor}</h3>
          <p><strong>Letra:</strong> {m.letra}</p>
          <p><strong>Tom:</strong> {m.tom} | <strong>Compasso:</strong> {m.compasso}</p>
          <audio controls>
            <source src={m.audio} type="audio/mpeg" />
          </audio>
          <p><a href={m.video} target="_blank">🎥 Ver Vídeo</a></p>
        </div>
      ))}

      <h2>📅 Escalas</h2>
      {escalas.map((e, i) => (
        <div key={i}>
          <strong>{e.data} - {e.equipe}</strong>
          <ul>
            {e.louvor.map((l, j) => <li key={j}>{l}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
