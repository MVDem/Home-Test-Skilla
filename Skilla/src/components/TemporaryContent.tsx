import styles from './scss/CallsTable.module.scss';
import ButtonBest from './ButtonBest';
import ButtonBadly from './ButtonBadly';
import ButtonRecognize from './ButtonRecognize';
import ButtonGood from './ButtonGood';

export default function TemporaryContent() {
  return (
    <>
      <div className={styles.tableContent}>
        <div>
          <img
            src="./img/checkbox.svg"
            alt="checkbox"
            className={styles.tableContent__checkbox}
          />
        </div>
        <img
          src="./img/callBlue.svg"
          alt="callBlue"
          className={styles.tableContent__type}
        />
        <p className={styles.tableContent__time}>19:00</p>
        <img src="./img/avatarEmployee.png" alt="avatarEmployee" />
        <div>
          <img
            src="./img/web.svg"
            alt="web"
            className={styles.tableContent__web}
          />
        </div>
        <p className={styles.tableContent__phone}>+7 (987) 567-17-12</p>
        <p className={styles.tableContent__source}>Rabota.ru</p>
        <div className={styles.tableContent__grade}>
          <ButtonBest />
          <img
            src="./img/info.svg"
            alt="info"
            className={styles.tableContent__checkbox}
          />
        </div>
        <p className={styles.tableContent__duration}>12:06</p>
      </div>
      <div className={styles.tableContent}>
        <div>
          <img
            src="./img/checkbox.svg"
            alt="checkbox"
            className={styles.tableContent__checkbox}
          />
        </div>
        <img
          src="./img/callGreen.svg"
          alt="callGreen"
          className={styles.tableContent__type}
        />
        <p className={styles.tableContent__time}>18:00</p>
        <img src="./img/avatarEmployee.png" alt="avatarEmployee" />
        <div></div>
        <p className={styles.tableContent__phone}>+7 (987) 567-17-12</p>
        <p className={styles.tableContent__source}>Санкт-Петербург</p>
        <div className={styles.tableContent__grade}>
          <ButtonBadly />
          <img
            src="./img/info.svg"
            alt="info"
            className={styles.tableContent__checkbox}
          />
        </div>
        <p className={styles.tableContent__duration}>12:06</p>
      </div>
      <div className={styles.tableContent}>
        <div>
          <img
            src="./img/checkbox.svg"
            alt="checkbox"
            className={styles.tableContent__checkbox}
          />
        </div>
        <img
          src="./img/callRed.svg"
          alt="callRed"
          className={styles.tableContent__type}
        />
        <p className={styles.tableContent__time}>18:00</p>
        <img src="./img/avatarEmployee.png" alt="avatarEmployee" />
        <div></div>
        <p className={styles.tableContent__phone}>+7 (987) 567-17-12</p>
        <p className={styles.tableContent__source}>Yandex</p>
        <div className={styles.tableContent__grade}>
          <ButtonRecognize />
          <img
            src="./img/info.svg"
            alt="info"
            className={styles.tableContent__checkbox}
          />
        </div>
        <p className={styles.tableContent__duration}>12:06</p>
      </div>
      <div className={styles.tableContent}>
        <div>
          <img
            src="./img/checkbox.svg"
            alt="checkbox"
            className={styles.tableContent__checkbox}
          />
        </div>
        <img
          src="./img/callGreen.svg"
          alt="callGreen"
          className={styles.tableContent__type}
        />
        <p className={styles.tableContent__time}>18:00</p>
        <img src="./img/avatarEmployee.png" alt="avatarEmployee" />
        <div></div>
        <p className={styles.tableContent__phone}>+7 (987) 567-17-12</p>
        <p className={styles.tableContent__source}>Google</p>
        <div className={styles.tableContent__grade}>
          <ButtonGood />
          <img
            src="./img/info.svg"
            alt="info"
            className={styles.tableContent__checkbox}
          />
        </div>
        <p className={styles.tableContent__duration}>12:06</p>
      </div>
    </>
  );
}
