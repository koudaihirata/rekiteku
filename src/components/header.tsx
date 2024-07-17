import Image from "next/image";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import Link from "next/link";
import NextImage from "./NextImage";

export default function Header() {
	return (
		<header>
			<div
				className={css({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					position: "fixed",
					width: "100%",
					zIndex: 100,
					height: "80px",
					pl: "4px",
				})}
			>
				<div
					className={css({
						width: "80px",
						height: "100%",
						padding: "4px",
					})}
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
						width: "300px",
						height: "100%",
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
			</div>
		</header>
	);
}
