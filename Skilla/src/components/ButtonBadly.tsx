import styles from './scss/Buttons.module.scss';

export default function ButtonBadly() {
  return (
    <>
      <button className={styles.buttonBadly}>
        <img src="./img/redDots.svg" alt="redDots" />
        <div>
          <p>Плохо</p>
        </div>
      </button>
    </>
  );
}
