import { useNavigate } from 'react-router-dom';
import GameConsole from '../../components/GameConsole/GameConsole';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            Descubra o <span className={styles.highlight}>Universo</span> dos Games
          </h1>
          <p className={styles.heroSub}>
            Explore nosso catálogo completo, descubra novos títulos e favorite os seus jogos preferidos.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => navigate('/catalog')}>
              Ver Catálogo
            </button>
            <button className={styles.btnSecondary} onClick={() => navigate('/about')}>
              Sobre o Projeto
            </button>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Console Interativo</h2>
          <p className={styles.sectionDesc}>
            Navegue pelos jogos em destaque usando o controle retrô abaixo
          </p>
        </div>
        <GameConsole />
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Por que GameVault?</h2>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎯</span>
            <h3 className={styles.featureTitle}>Catálogo Curado</h3>
            <p className={styles.featureDesc}>Seleção especial dos melhores títulos de diversas plataformas e gêneros.</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>⚡</span>
            <h3 className={styles.featureTitle}>Navegação Rápida</h3>
            <p className={styles.featureDesc}>Interface fluida e responsiva para encontrar seu jogo ideal em segundos.</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>❤️</span>
            <h3 className={styles.featureTitle}>Favoritos</h3>
            <p className={styles.featureDesc}>Salve seus jogos preferidos e monte sua própria coleção personalizada.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
