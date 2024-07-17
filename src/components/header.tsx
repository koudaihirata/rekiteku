import Image from "next/image";
import { useEffect, useState } from "react";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import Link from "next/link";
import NextImage from "./NextImage";

export default function Header() {
	const [logoSize, setLogoSize] = useState(200);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setLogoSize(80);
			} else {
				setLogoSize(200);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header>
			<div
				className={css({
					position: "fixed",
					top: "0",
					left: "0",
					zIndex: "100",
					padding: "4px",
					bgColor: "#fff",
					borderBottomRightRadius: "16px",
					transition: "all 0.3s",
				})}
				style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
			>
				<img
					src="./header_logo.svg"
					alt="logo"
					className={css({ w: "100%", h: "100%", objectFit: "contain" })}
				/>
			</div>

			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSdr-jVJyfM-1gLJy7D6IWtzhDEN8PpZ1xqtUH-lpV5QqpjZlg/viewform"
				className={css({
					position: "fixed",
					top: "0",
					right: "0",
					zIndex: "100",
					width: "300px",
					height: "80px",
					display: "grid",
					placeItems: "center",
					bgColor: "#004B88",
					borderBottomLeftRadius: "16px",
				})}
			>
				<p
					className={css({
						fontSize: "22px",
						fontWeight: "bold",
						color: "white",
					})}
				>
					申し込みはこちら
				</p>
			</a>
		</header>
	);
}
