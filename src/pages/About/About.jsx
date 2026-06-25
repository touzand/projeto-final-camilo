import styles from './About.module.css';

function About() {
  return (
    <div className={`container ${styles.about}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sobre o Projeto</h1>
        <p className={styles.subtitle}>
          Trabalho Final - Projeto Frontend com React
        </p>

        <section className={styles.section}>
          <h2>GameVault - Catálogo de Games</h2>
          <p>
            O GameVault é um catálogo digital de jogos eletrônicos desenvolvido como trabalho
            final da disciplina Linguagem de Programação para Internet, da UNIUBE.
          </p>
          <p>
            A aplicação permite explorar um catálogo de jogos, visualizar detalhes, filtrar por
            gênero, buscar por nome e salvar favoritos — tudo em uma experiência Single Page
            Application (SPA) moderna e responsiva.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Disciplina</h2>
          <p>Linguagem de Programação para Internet</p>
          <p>Professor: Dr. Camilo Barreto</p>
          <p>UNIUBE - Grande Área de Computação</p>
        </section>

        <section className={styles.section}>
          <h2>Tecnologias Utilizadas</h2>
          <ul className={styles.techList}>
            <li>React 19 + JavaScript</li>
            <li>Vite (bundler)</li>
            <li>React Router DOM (roteamento SPA)</li>
            <li>CSS Modules (estilização)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Componente Criativo</h2>
          <p>
            O componente <strong>GameConsole</strong> é um console retrô interativo que permite
            navegar pelos jogos em destaque usando um controle com D-Pad (direcionais) e botões
            de ação (A, B, X, Y). Cada botão executa uma função diferente:
          </p>
          <ul className={styles.featureList}>
            <li><strong>▲▼◀▶</strong> - Navegar entre os jogos em destaque</li>
            <li><strong>A (Play)</strong> - Ativa o modo "playing" com animação</li>
            <li><strong>B (Info)</strong> - Navega para a página de detalhes do jogo</li>
            <li><strong>X (Random)</strong> - Seleciona um jogo aleatório</li>
            <li><strong>Y (Reset)</strong> - Volta ao primeiro jogo da lista</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Integrante</h2>
          <div className={styles.member}>
            <div className={styles.memberAvatar}>👤</div>
            <div>
              <p className={styles.memberName}>(Nome do Aluno)</p>
              <p className={styles.memberRa}>RA: (insira seu RA)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
