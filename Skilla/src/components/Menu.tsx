import { NavLink } from 'react-router-dom';
import styles from './scss/Menu.module.scss';

export default function Menu() {
  return (
    <>
      <section className={styles.menu}>
        <div className={styles.menu__logo}>
          <img src="./img/logo.png" alt="Logo" />
        </div>
        <div className={styles.menu__list}>
          <div className={styles.menu__item}>
            <img src="./img/results.png" alt="Logo" />
            <p>Итоги</p>
          </div>
          <div className={styles.menu__item}>
            <img src="./img/orders.png" alt="Logo" />
            <p>Заказы</p>
          </div>
          <div className={styles.menu__item}>
            <img src="./img/mail.png" alt="Logo" />
            <p>Сообщения</p>
          </div>
          <NavLink to={'/calls'} className={styles.menu__item}>
            <img src="./img/calls.png" alt="Logo" />
            <p>Звонки</p>
          </NavLink>
          <div className={styles.menu__item}>
            <img src="./img/people.png" alt="Logo" />
            <p>Контрагенты</p>
          </div>
          <div className={styles.menu__item}>
            <img src="./img/documents.png" alt="Logo" />
            <p>Документы</p>
          </div>
          <div className={styles.menu__item}>
            <img src="./img/perm.png" alt="Logo" />
            <p>Исполнители</p>
          </div>
          <div className={styles.menu__item}>
            <img src="./img/briefcase.png" alt="Logo" />
            <p>Отчеты</p>
          </div>
          <div className={styles.menu__item}>
            <img src="./img/localLibrary.png" alt="Logo" />
            <p>База знаний</p>
          </div>
          <div className={styles.menu__item}>
            <img src="./img/settings.png" alt="Logo" />
            <p>Настройки</p>
          </div>
        </div>
        <div className={styles.menu__buttonsList}>
          <button className={styles.menu__button}>
            <p>Добавить заказ</p>
            <img src="./img/add.png" alt="Logo" />
          </button>
          <button className={styles.menu__buttonPay}>
            <p>Оплата</p>
            <img src="./img/alert.png" alt="Logo" />
          </button>
        </div>
      </section>
    </>
  );
}
