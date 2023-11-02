import { Outlet } from 'react-router-dom';
import styles from './scss/LayOut.module.scss';
import Menu from '../components/Menu';
import Header from '../components/Header';
export default function LayOut() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Header />
        </header>
        <nav className={styles.navigation}>
          <Menu />
        </nav>
        <main className={styles.main}>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
}
