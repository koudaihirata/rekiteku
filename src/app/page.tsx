import Image from "next/image";
import styles from "./page.module.css";
import { css } from "../../styled-system/css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "@/components/Profile";
import FirstView from "@/components/FirstView";
import LeadText from "@/components/LeadText";
import Plans from "@/components/plans";
import Notes from "@/components/Notes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <FirstView/>
      <LeadText/>
      <Plans />
      <Profile/>
      <Notes/>
      <Footer/>
    </main>
  );
}

