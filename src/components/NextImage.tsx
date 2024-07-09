import Image from "next/image";
import styles from "@/styles/components/next_image.module.scss";

type NextImageProps = {
	src: string;
	alt: string;
};

export default function NextImage(props: NextImageProps) {
	return (
		<div className={styles.container}>
			<Image
				src={props.src}
				alt={props.alt}
				fill
				sizes="100vw"
				className={styles.image}
			/>
		</div>
	);
}
