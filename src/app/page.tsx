import Image from "next/image";
import styles from "./page.module.css";
import { css } from "../../styled-system/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Plans from "@/components/plans";

export default function Home() {
	return (
		<div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
			<Plans />
		</div>
	);
}
