import Image from "next/image";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import Link from "next/link";

export default function Header() {
	return (
		<header>
			<div
				className={css({
					display: "flex",
					justifyContent: "space-between",
					position: "fixed",
					width: "100%",
					zIndex: 100,
				})}
			>
				<Image
					src="./header_logo.svg"
					alt="hoge"
					width={100}
					height={100}
					className={css({ margin: "5px" })}
				/>
				<button
					type="button"
					className={css({
						bgColor: "#004B88",
						width: "300px",
						height: "80px",
						fontSize: "22px",
						fontWeight: "bold",
						color: "white",
						borderRadius: "0px 0px 0px 8px",
					})}
				>
					<Link href="https://docs.google.com/forms/d/e/1FAIpQLSdr-jVJyfM-1gLJy7D6IWtzhDEN8PpZ1xqtUH-lpV5QqpjZlg/viewform">
						申し込みはこちら
					</Link>
				</button>
			</div>
		</header>
	);
}
