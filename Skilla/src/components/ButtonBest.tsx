import styles from './scss/Buttons.module.scss';

export default function ButtonBest() {
  return (
    <>
      <button className={styles.buttonBest}>
        <img src="./img/GreenDots.svg" alt="GreenDots" />
        <div>
          <p>Отлично</p>
        </div>
      </button>
    </>
  );
}
