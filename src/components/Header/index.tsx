import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.Header}>
      <div className={styles.contentHeader}>
        <Link href="/">
          <img src="/images/vector.svg" alt="logo" />
        </Link>
        <Link href="/">
          <img src="/images/spacetraveling.svg" alt="spacetraveling" />
        </Link>
      </div>
    </header>
  );
}
