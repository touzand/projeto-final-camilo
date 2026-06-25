import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import GameCard from '../../components/GameCard/GameCard';
import { games, genres } from '../../data/games';
import styles from './Catalog.module.css';

function Catalog() {
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem('favorites') || '[]')
  );

  const filteredGames = games.filter((game) => {
    const matchSearch = game.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = selectedGenre === 'Todos' || game.genre === selectedGenre;
    return matchSearch && matchGenre;
  });

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
    <div className={`container ${styles.catalog}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Catálogo de Games</h1>
        <p className={styles.subtitle}>
          {filteredGames.length} {filteredGames.length === 1 ? 'jogo encontrado' : 'jogos encontrados'}
        </p>
      </div>

      <div className={styles.filters}>
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar genres={genres} selected={selectedGenre} onChange={setSelectedGenre} />
      </div>

      {filteredGames.length > 0 ? (
        <div className={styles.grid}>
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onFavorite={handleFavorite}
              isFavorited={favorites.includes(game.id)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🎮</span>
          <h3>Nenhum jogo encontrado</h3>
          <p>Tente alterar os filtros ou buscar por outro termo.</p>
        </div>
      )}
    </div>
  );
}

export default Catalog;
