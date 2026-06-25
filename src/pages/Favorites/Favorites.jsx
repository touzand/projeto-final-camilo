import { useState } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import { games } from '../../data/games';
import styles from './Favorites.module.css';

function Favorites() {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem('favorites') || '[]')
  );

  const favoriteGames = games.filter((g) => favorites.includes(g.id));

  const handleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className={`container ${styles.favorites}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Meus Favoritos</h1>
        <p className={styles.subtitle}>
          {favoriteGames.length} {favoriteGames.length === 1 ? 'jogo salvo' : 'jogos salvos'}
        </p>
      </div>

      {favoriteGames.length > 0 ? (
        <div className={styles.grid}>
          {favoriteGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onFavorite={handleFavorite}
              isFavorited={true}
            />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>💔</span>
          <h3>Nenhum favorito ainda</h3>
          <p>Navegue pelo catálogo e favorite os jogos que mais gostar!</p>
          <a href="/catalog" className={styles.browseBtn}>Explorar Catálogo</a>
        </div>
      )}
    </div>
  );
}

export default Favorites;
