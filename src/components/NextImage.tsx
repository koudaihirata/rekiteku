import Image from "next/image";

type NextImageProps = {
	src: string;
	alt: string;
};

export default function NextImage(props: NextImageProps) {
	return (
		<div style={{ position: "relative", width: "100%", height: "100%" }}>
			<Image
				style={{ objectFit: "cover" }}
				src={props.src}
				alt={props.alt}
				fill
				sizes="100vw"
			/>
		</div>
	);
}
