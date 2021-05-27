import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.Header}>
      <div className={styles.contentHeader}>
        <img src="/images/vector.svg" alt="logo" />
        <img src="/images/spacetraveling.svg" alt="spacetraveling" />
      </div>
    </header>
  );
}
