import styles from './scss/Buttons.module.scss';

export default function ButtonGood() {
  return (
    <>
      <button className={styles.buttonGood}>
        <img src="./img/grayDots.svg" alt="grayDots" />
        <div>
          <p>Хорошо</p>
        </div>
      </button>
    </>
  );
}
