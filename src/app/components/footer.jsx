import styles from "../styles/footercomponent.module.css";

export default function FooterComponent() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className={styles.container}>
        Desenvolvido por Rtech - {year}
      </footer>
    </>
  );
}
