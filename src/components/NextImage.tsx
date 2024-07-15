import Image from "next/image";
import styles from "@/styles/components/next_image.module.scss";
import { css } from "../../styled-system/css";

type NextImageProps = {
	src: string;
	alt: string;
};

export default function NextImage(props: NextImageProps) {
	return (
		<div className={css({ pos: "relative", w: "100%", h: "100%" })}>
			<Image
				src={props.src}
				alt={props.alt}
				fill
				sizes="100vw"
				className={css({ objectFit: "cover" })}
			/>
		</div>
	);
}
