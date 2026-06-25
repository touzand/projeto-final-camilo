import { useNavigate } from 'react-router-dom';
import styles from './GameCard.module.css';

function GameCard({ game, onFavorite, isFavorited }) {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/game/${game.id}`)}>
      <div className={styles.imageWrap}>
        <img src={game.image} alt={game.title} className={styles.image} />
        <span className={styles.genre}>{game.genre}</span>
        <button
          className={`${styles.favBtn} ${isFavorited ? styles.favorited : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(game.id);
          }}
        >
          {isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{game.title}</h3>
        <div className={styles.meta}>
          <span className={styles.platform}>{game.platform}</span>
          <span className={styles.year}>{game.year}</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span>{game.rating}</span>
          </div>
          <span className={styles.price}>
            {game.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
