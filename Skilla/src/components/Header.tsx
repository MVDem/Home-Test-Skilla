import Analytics from './Analytics';
import styles from './scss/Header.module.scss';

export default function Header() {
  return (
    <>
      <section className={styles.top}>
        <div className={styles.top__left}>
          <p>Среда, 13 окт</p>
          <Analytics />
        </div>
        <div className={styles.topRight}>
          <button type="button" className={styles.topRight__search}>
            <img src="./img/search.svg" alt="search" />
          </button>
          <button className={styles.topRight__userName}>
            <p>ИП Сидорова Александра Михайловна</p>
            <img src="./img/down.svg" alt="down" />
          </button>
          <button className={styles.topRight__userAvatar}>
            <img src="./img/avatarUser.png" alt="avatarUser" />
            <img src="./img/down.svg" alt="down" />
          </button>
        </div>
      </section>
    </>
  );
}
