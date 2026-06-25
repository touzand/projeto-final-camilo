import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>🎮 GameVault</span>
            <p className={styles.desc}>
              Seu catálogo definitivo de games. Descubra, explore e favorite seus jogos favoritos.
            </p>
          </div>
          <div className={styles.links}>
            <h4 className={styles.heading}>Navegação</h4>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/catalog">Catálogo</a></li>
              <li><a href="/favorites">Favoritos</a></li>
              <li><a href="/about">Sobre</a></li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.heading}>Contato</h4>
            <p>Desenvolvido como trabalho acadêmico</p>
            <p>UNIUBE - Linguagem de Programação para Internet</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} GameVault. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
