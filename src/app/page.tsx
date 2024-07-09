import Image from "next/image";
import styles from "./page.module.css";
import { css } from "../../styled-system/css";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import FirstView from "@/components/FirstView";
import LeadText from "@/components/LeadText";

export default function Home() {
  return (
    <main>
      <FirstView/>
      <LeadText/>
      <Profile/>
      <Footer/>
    </main>
  );
}
