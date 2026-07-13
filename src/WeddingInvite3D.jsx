import { useRef, useState } from "react";
import "./WeddingInvite3D.css";

const butterflies = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: 5 + ((index * 17) % 90),
  delay: (index % 7) * 0.12,
  duration: 3.8 + (index % 5) * 0.65,
  size: 26 + (index % 5) * 8,
  drift: -180 + ((index * 47) % 360),
  rotation: -40 + ((index * 31) % 80),
}));

function ButterflyImage({
  className = "",
  alt = "Borboleta da Heloísa",
}) {
  return (
    <img
      src="/images/heloisa-borboleta.png"
      alt={alt}
      className={className}
    />
  );
}

export default function WeddingInvite3D() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);

  const convite = {
    nome: "Heloísa",
    idade: "1 aninho",

    dataSemana: "Sábado",
    mes: "Agosto",
    dia: "?",
    ano: "2026",
    hora: "?",

    local: "Local da Festa",
    endereco: "Cauã não sabe o endereço ainda",

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Brasilia+DF",
  };

  const handleOpen = () => {
    if (open) return;

    setOpen(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;

      audioRef.current.play().catch((error) => {
        console.log(
          "O navegador bloqueou a reprodução do áudio:",
          error
        );
      });
    }
  };

  const handleClose = (event) => {
    event.stopPropagation();

    setOpen(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section className="birthday-book-page">
      {/* SOM */}
      <audio
        ref={audioRef}
        src="/sounds/borboletas.mp3"
        preload="auto"
      />

      {/* FUNDO */}
      <div className="ambient-light ambient-light-one"></div>
      <div className="ambient-light ambient-light-two"></div>

      {/* BORBOLETAS QUE VOAM AO ABRIR */}
      {open && (
        <div
          className="butterfly-flight"
          aria-hidden="true"
        >
          {butterflies.map((butterfly) => (
            <img
              key={butterfly.id}
              src="/images/heloisa-borboleta.png"
              alt=""
              className="flying-butterfly custom-flying-butterfly"
              style={{
                "--left": `${butterfly.left}%`,
                "--delay": `${butterfly.delay}s`,
                "--duration": `${butterfly.duration}s`,
                "--size": `${butterfly.size + 18}px`,
                "--drift": `${butterfly.drift}px`,
                "--rotation": `${butterfly.rotation}deg`,
              }}
            />
          ))}
        </div>
      )}

      <div
        className={`book-wrapper ${
          open ? "is-open" : ""
        }`}
      >
        <div className="book-stage">
          <div
            className="book"
            onClick={handleOpen}
          >
            <div className="book-spine"></div>

            {/* PAINEL ESQUERDO */}
            <aside className="panel panel-left">
              <div className="panel-content">
                <ButterflyImage className="mini-butterfly-img" />

                <h2>Uma doce história</h2>

                <p>
                  Há um ano, nossas vidas ficaram ainda
                  mais bonitas, coloridas e cheias de amor.
                </p>

                <p>
                  Nossa pequena borboletinha chegou trazendo
                  alegria, descobertas, sorrisos e momentos
                  inesquecíveis.
                </p>

                <h2>Vamos celebrar!</h2>

                <p>
                  Agora chegou a hora de comemorar o primeiro
                  capítulo dessa linda história.
                </p>

                <div className="soft-message">
                  “Voe, sonhe e espalhe sua alegria por onde
                  passar.”
                </div>

                <div className="butterfly-trail">
                  <ButterflyImage className="trail-butterfly" />

                  <span>✦</span>
                  <span>·</span>
                  <span>✦</span>

                  <ButterflyImage className="trail-butterfly" />
                </div>
              </div>
            </aside>

            {/* PAINEL CENTRAL */}
            <main className="panel panel-center">
              <ButterflyImage
                className="
                  decorative-butterfly
                  butterfly-top-left
                  decorative-butterfly-img
                "
              />

              <ButterflyImage
                className="
                  decorative-butterfly
                  butterfly-bottom-right
                  decorative-butterfly-img
                "
              />

              {/* BORBOLETAS DECORATIVAS ESQUERDA */}
              <div
                className="
                  watercolor-butterflies
                  watercolor-left
                "
                aria-hidden="true"
              >
                <ButterflyImage className="water-butterfly water-butterfly-1" />

                <ButterflyImage className="water-butterfly water-butterfly-2" />

                <ButterflyImage className="water-butterfly water-butterfly-3" />
              </div>

              {/* BORBOLETAS DECORATIVAS DIREITA */}
              <div
                className="
                  watercolor-butterflies
                  watercolor-right
                "
                aria-hidden="true"
              >
                <ButterflyImage className="water-butterfly water-butterfly-1" />

                <ButterflyImage className="water-butterfly water-butterfly-2" />

                <ButterflyImage className="water-butterfly water-butterfly-3" />
              </div>

              <article className="main-card">
                <p className="small-text">
                 
                </p>

                <div className="birthday-number">
                  <span>1</span>
                </div>

                <h1>{convite.nome}</h1>

                <p className="age-title">
                  {convite.idade}
                </p>

                <p className="invite-text">
                  Minha primeira volta ao sol merece uma
                  comemoração cheia de amor, magia e lindas
                  borboletas.
                </p>

                <p className="come-celebrate">
                  Venha celebrar comigo!
                </p>

                <div className="date-row">
                  <div>
                    <strong>
                      {convite.dataSemana}
                    </strong>

                    <span>
                      {convite.mes}
                    </span>
                  </div>

                  <div className="day">
                    {convite.dia}
                  </div>

                  <div>
                    <strong>
                      {convite.ano}
                    </strong>

                    <span>
                      {convite.hora}
                    </span>
                  </div>
                </div>

                <p className="address">
                  {convite.local}
                  <br />
                  {convite.endereco}
                </p>

                <p className="signature">
                  Espero você!
                </p>
              </article>
            </main>

            {/* PAINEL DIREITO */}
            <aside className="panel panel-right">
              <div className="panel-content schedule">
                <ButterflyImage className="mini-butterfly-img" />

                <h2>Nossa Festa</h2>

                <div className="schedule-item">
                  <span>🎂</span>

                  <div>
                    <strong>Comemoração</strong>

                    <p>
                      1 aninho da {convite.nome}
                    </p>
                  </div>
                </div>

                <div className="schedule-item">
                  <span>📅</span>

                  <div>
                    <strong>Data</strong>

                    <p>
                      {convite.dia} de {convite.mes} de{" "}
                      {convite.ano}
                    </p>
                  </div>
                </div>

                <div className="schedule-item">
                  <span>⏰</span>

                  <div>
                    <strong>Horário</strong>

                    <p>
                      {convite.hora}
                    </p>
                  </div>
                </div>

                <div className="schedule-item">
                  <span>📍</span>

                  <div>
                    <strong>Local</strong>

                    <p>
                      {convite.local}
                    </p>
                  </div>
                </div>

                <a
                  className="location-button"
                  href={convite.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                >
                  Ver localização no mapa
                </a>

                <div className="party-note">
                  Sua presença vai deixar esse dia ainda
                  mais mágico e especial.

                  <ButterflyImage className="party-note-butterfly" />
                </div>
              </div>
            </aside>

            {/* CAPA */}
            <div className="book-cover">
              <div className="cover-glow"></div>

              <ButterflyImage
                className="
                  cover-butterfly
                  cover-butterfly-one
                  cover-butterfly-img
                "
              />

              <ButterflyImage
                className="
                  cover-butterfly
                  cover-butterfly-two
                  cover-butterfly-img
                "
              />

              <ButterflyImage
                className="
                  cover-butterfly
                  cover-butterfly-three
                  cover-butterfly-img
                "
              />

              <div className="cover-lines"></div>

              <p>
                Um jardim encantado espera por você
              </p>

              <h1>
                {convite.nome}
              </h1>

              <div className="cover-age">
                <strong>1</strong>

                <span>
                  aninho
                </span>
              </div>

              <div className="cover-divider">
                <span>✦</span>

                <ButterflyImage className="cover-divider-butterfly" />

                <span>✦</span>
              </div>

              <small>
                Clique para abrir

                <ButterflyImage className="click-butterfly-img" />
              </small>
            </div>
          </div>
        </div>

        {open && (
          <button
            className="close-button"
            onClick={handleClose}
          >
            Fechar convite
          </button>
        )}
      </div>
    </section>
  );
}