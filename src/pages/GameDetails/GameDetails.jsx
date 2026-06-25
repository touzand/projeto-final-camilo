import { useParams, useNavigate } from 'react-router-dom';
import { games } from '../../data/games';
import RatingStars from '../../components/RatingStars/RatingStars';
import styles from './GameDetails.module.css';

function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id === Number(id));

  if (!game) {
    return (
      <div className={`container ${styles.notFound}`}>
        <span className={styles.notFoundIcon}>❓</span>
        <h2>Jogo não encontrado</h2>
        <p>O jogo que você procura não existe em nosso catálogo.</p>
        <button className={styles.backBtn} onClick={() => navigate('/catalog')}>
          ← Voltar ao Catálogo
        </button>
      </div>
    );
  }

  const similarGames = games.filter(
    (g) => g.genre === game.genre && g.id !== game.id
  ).slice(0, 3);

  return (
    <div className={`container ${styles.details}`}>
      <button className={styles.backBtn} onClick={() => navigate('/catalog')}>
        ← Voltar
      </button>

      <div className={styles.main}>
        <div className={styles.imageWrap}>
          <img src={game.image} alt={game.title} className={styles.image} />
        </div>
        <div className={styles.info}>
          <span className={styles.genre}>{game.genre}</span>
          <h1 className={styles.title}>{game.title}</h1>
          <RatingStars rating={game.rating} />

          <p className={styles.description}>{game.description}</p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Plataforma</span>
              <span className={styles.metaValue}>{game.platform}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Desenvolvedora</span>
              <span className={styles.metaValue}>{game.developer}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Ano</span>
              <span className={styles.metaValue}>{game.year}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Preço</span>
              <span className={styles.metaValue}>
                {game.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {similarGames.length > 0 && (
        <section className={styles.similar}>
          <h2 className={styles.similarTitle}>Jogos Similares</h2>
          <div className={styles.similarGrid}>
            {similarGames.map((g) => (
              <div key={g.id} className={styles.similarCard} onClick={() => navigate(`/game/${g.id}`)}>
                <img src={g.image} alt={g.title} className={styles.similarImage} />
                <div className={styles.similarInfo}>
                  <h4>{g.title}</h4>
                  <div className={styles.similarRating}>★ {g.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default GameDetails;
