import { IData } from '../type';
import ButtonScriptNotUsed from './ButtonScriptNotUsed';
import TemporaryContent from './TemporaryContent';
import styles from './scss/CallsTable.module.scss';

export default function CallsTable(props: { data: IData | null | undefined }) {
  const getDate = (e: string) => {
    const date = new Date(e);
    const addLeadingZero = (e: number) => {
      return e < 10 ? '0' + e : e;
    };
    const hours = addLeadingZero(date.getHours());
    const minutes = addLeadingZero(date.getMinutes());

    const timeString = `${hours}:${minutes}`;

    return timeString;
  };

  const getDuration = (e: number) => {
    const addLeadingZero = (val: number) => {
      return e < 10 ? '0' + val : val;
    };

    const minutes = Math.floor(e / 60);
    const seconds = e - minutes * 60;

    const timeString = `${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;

    return timeString;
  };

  return (
    <>
      <div className={styles.callsTable}>
        <div className={styles.settings}>
          <button className={styles.settings__search}>
            <img src="./img/loupe.svg" alt="loupe" />
            <p>Поиск по звонкам</p>
          </button>
          <div className={styles.settings__rightPanel}>
            <button className={styles.settings__type}>
              <p>Все типы</p>
              <img src="./img/down.svg" alt="down" />
            </button>
            <button className={styles.settings__type}>
              <p>Все сотрудники</p>
              <img src="./img/down.svg" alt="Down" />
            </button>
            <button className={styles.settings__type}>
              <p>Все звонки</p>
              <img src="./img/down.svg" alt="Down" />
            </button>
            <button className={styles.settings__type}>
              <p>Все источники</p>
              <img src="./img/down.svg" alt="Down" />
            </button>
            <button className={styles.settings__type}>
              <p>Все оценки</p>
              <img src="./img/down.svg" alt="Down" />
            </button>
            <button className={styles.settings__type}>
              <p>Все ошибки</p>
              <img src="./img/down.svg" alt="Down" />
            </button>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.table__title}>
            <div>
              <img
                src="./img/checkbox.svg"
                alt="checkbox"
                className={styles.tableContent__checkbox}
              />
            </div>
            <p>Тип</p>
            <p>Время</p>
            <p>Сотрудник</p>
            <div></div>
            <p>Звонок</p>
            <p>Источник</p>
            <p>Оценка</p>
            <p>Длительность</p>
          </div>
          <div className={styles.table__scroll}>
            <TemporaryContent />
            {props.data?.results?.map((e, i) => {
              return (
                <div key={i} className={styles.tableContent}>
                  <div>
                    <img
                      src="./img/checkbox.svg"
                      alt="checkbox"
                      className={styles.tableContent__checkbox}
                    />
                  </div>
                  {e.in_out == 1 && (
                    <img
                      src="./img/callBlue.svg"
                      alt="callBlue"
                      className={styles.tableContent__type}
                    />
                  )}
                  {e.in_out == 0 && (
                    <img
                      src="./img/callGreen.svg"
                      alt="callGreen"
                      className={styles.tableContent__type}
                    />
                  )}
                  <p className={styles.tableContent__time}>{getDate(e.date)}</p>
                  <img
                    src={e.person_avatar}
                    alt="avatarEmployee"
                    className={styles.tableContent__avatar}
                  />
                  <div>
                    {e.from_site == 1 && (
                      <img
                        src="./img/web.svg"
                        alt="web"
                        className={styles.tableContent__web}
                      />
                    )}
                  </div>
                  <p className={styles.tableContent__phone}>{e.from_number}</p>
                  <p className={styles.tableContent__source}>{e.source}</p>
                  <div className={styles.tableContent__grade}>
                    <ButtonScriptNotUsed />
                    <img
                      src="./img/info.svg"
                      alt="info"
                      className={styles.tableContent__checkbox}
                    />
                  </div>
                  <p className={styles.tableContent__duration}>
                    {getDuration(e.time)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
