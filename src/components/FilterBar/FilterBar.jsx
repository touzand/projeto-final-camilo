import styles from './FilterBar.module.css';

function FilterBar({ genres, selected, onChange }) {
  return (
    <div className={styles.bar}>
      {genres.map((genre) => (
        <button
          key={genre}
          className={`${styles.btn} ${selected === genre ? styles.active : ''}`}
          onClick={() => onChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
