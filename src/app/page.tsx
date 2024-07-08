import Image from "next/image";
import styles from "./page.module.css";
import { css } from "../../styled-system/css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
      <Footer/>
    </main>
  );
}
