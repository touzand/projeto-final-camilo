import styles from './RatingStars.module.css';

function RatingStars({ rating, interactive = false, onRate }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.stars}>
      {stars.map((star) => {
        const filled = star <= Math.round(rating);
        return (
          <span
            key={star}
            className={`${styles.star} ${filled ? styles.filled : styles.empty}`}
            onClick={() => interactive && onRate && onRate(star)}
          >
            ★
          </span>
        );
      })}
      <span className={styles.value}>{rating.toFixed(1)}</span>
    </div>
  );
}

export default RatingStars;
