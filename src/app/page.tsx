import Image from "next/image";
import styles from "./page.module.css";
import { css } from "../../styled-system/css";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main>
      <Profile/>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
    </main>
  );
}
