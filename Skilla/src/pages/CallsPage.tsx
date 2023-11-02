import { useState, useEffect } from 'react';
import CallsTable from '../components/CallsTable';
import styles from './scss/CallsPage.module.scss';
import { IData } from '../type';

export default function CallsPage() {
  const [data, setData] = useState<IData | null>();

  console.log(data);

  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer testtoken');

  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  };

  useEffect(() => {
    fetch(
      'https://api.skilla.ru/mango/getList? date_start=2023-10-29& date_end=2023-10-31',
      requestOptions
    )
      .then((response) => response.json())
      .then((result: IData) => setData(result))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <>
      <section className={styles.calls}>
        <div className={styles.calls__wrapper}>
          <div className={styles.calls__top}>
            <div className={styles.calls__balance}>
              <p>
                Баланс: <span>272 ₽ </span>
              </p>
              <img src="./img/add.svg" alt="add" />
            </div>
            <div className={styles.calls__calendar}>
              <img src="./img/left.svg" alt="left" />
              <button>
                <img src="./img/calendar.svg" alt="calendar" />
                <p>3 дня</p>
              </button>
              <img src="./img/right.svg" alt="right" />
            </div>
          </div>
          <div>
            <CallsTable data={data} />
          </div>
        </div>
      </section>
    </>
  );
}
