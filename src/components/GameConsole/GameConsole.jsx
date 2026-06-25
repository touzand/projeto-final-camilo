import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GameConsole.module.css';

const featuredGames = [
  { id: 1, title: 'Zelda: Tears of the Kingdom', image: 'https://placehold.co/600x400/1a1a2e/e94560?text=Zelda' },
  { id: 2, title: 'Elden Ring', image: 'https://placehold.co/600x400/16213e/0f3460?text=Elden+Ring' },
  { id: 3, title: 'God of War Ragnarök', image: 'https://placehold.co/600x400/533483/ffd700?text=GOW' },
  { id: 4, title: 'Red Dead Redemption 2', image: 'https://placehold.co/600x400/8b0000/ffd700?text=RDR2' },
];

const screens = [
  { name: 'A', label: 'Play' },
  { name: 'B', label: 'Info' },
  { name: 'X', label: 'Random' },
  { name: 'Y', label: 'Reset' },
];

function GameConsole() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const current = featuredGames[currentIndex];

  const handleUp = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
    setIsPlaying(false);
  };

  const handleDown = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredGames.length);
    setIsPlaying(false);
  };

  const handleLeft = () => {
    setCurrentIndex((prev) => (prev - 3 + featuredGames.length) % featuredGames.length);
    setIsPlaying(false);
  };

  const handleRight = () => {
    setCurrentIndex((prev) => (prev + 3) % featuredGames.length);
    setIsPlaying(false);
  };

  const handleAction = (action) => {
    switch (action) {
      case 'A':
        setIsPlaying(true);
        break;
      case 'B':
        navigate(`/game/${current.id}`);
        break;
      case 'X':
        setCurrentIndex(Math.floor(Math.random() * featuredGames.length));
        setIsPlaying(false);
        break;
      case 'Y':
        setCurrentIndex(0);
        setIsPlaying(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.console}>
      <div className={styles.screen}>
        <div className={`${styles.display} ${isPlaying ? styles.playing : ''}`}>
          <img src={current.image} alt={current.title} className={styles.screenImage} />
          <div className={styles.overlay}>
            <span className={styles.gameTitle}>{current.title}</span>
            <span className={styles.counter}>{currentIndex + 1} / {featuredGames.length}</span>
          </div>
          {isPlaying && <div className={styles.playingBadge}>▶ PLAYING</div>}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.dpad}>
          <button className={`${styles.dpadBtn} ${styles.up}`} onClick={handleUp}>▲</button>
          <button className={`${styles.dpadBtn} ${styles.left}`} onClick={handleLeft}>◀</button>
          <div className={styles.dpadCenter}></div>
          <button className={`${styles.dpadBtn} ${styles.right}`} onClick={handleRight}>▶</button>
          <button className={`${styles.dpadBtn} ${styles.down}`} onClick={handleDown}>▼</button>
        </div>

        <div className={styles.actions}>
          {screens.map((btn) => (
            <button
              key={btn.name}
              className={`${styles.actionBtn} ${styles[`btn${btn.name}`]}`}
              onClick={() => handleAction(btn.name)}
            >
              <span className={styles.btnLabel}>{btn.label}</span>
              <span className={styles.btnName}>{btn.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameConsole;
