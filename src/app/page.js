import Image from "next/image";
import styles from "./styles/general.module.css";
import { Cores } from "./components/Cores";
import Navbar from "./components/NavBar";
import FooterComponent from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.bodyContainer}>
      <Cores />
      <FooterComponent />

      </div>
    </main>
  );
}
