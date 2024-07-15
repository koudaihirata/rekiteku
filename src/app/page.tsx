"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { css } from "../../styled-system/css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import FirstView from "@/components/FirstView";
import LeadText from "@/components/LeadText";
import Plans from "@/components/plans";

export default function Home() {
	return (
		<main>
			<FirstView />
			<LeadText />
			<Plans />
			<Profile />
			<Footer />
		</main>
	);
}
