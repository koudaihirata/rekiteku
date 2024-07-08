import Image from "next/image";
import styles from "./page.module.css";
import { css } from "../../styled-system/css";
import LeadText from "@/components/LeadText";

export default function Home() {
  return (
    <main>
      <LeadText/>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
    </main>
  );
}
