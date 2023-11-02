import styles from './scss/Analytics.module.scss';

export default function Analytics() {
  return (
    <>
      <div className={styles.analytics}>
        <div className={styles.analytics__item}>
          <p className={styles.analytics__title}>
            Новые звонки
            <span style={{ color: '#00a775' }}> 20 из 30 шт</span>
          </p>
          <div>
            <span style={{ width: '44%', backgroundColor: '#00a775' }}></span>
          </div>
        </div>
        <div className={styles.analytics__item}>
          <p className={styles.analytics__title}>
            Качество разговоров
            <span style={{ color: '#FFD500' }}> 40%</span>
          </p>
          <div>
            <span style={{ width: '44%', backgroundColor: '#FFD500' }}></span>
          </div>
        </div>
        <div className={styles.analytics__item}>
          <p className={styles.analytics__title}>
            Конверсия в заказ
            <span style={{ color: '#EA1A4F' }}> 67%</span>
          </p>
          <div>
            <span style={{ width: '44%', backgroundColor: '#EA1A4F' }}></span>
          </div>
        </div>
      </div>
    </>
  );
}
