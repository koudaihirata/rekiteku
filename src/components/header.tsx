import Image from "next/image";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

export default function Header() {
	return (
		<header>
			<div className={flex({ justifyContent: "space-between" })}>
				<Image src="/header_logo.png" alt="hoge" width={100} height={100} />
				<button
					type="button"
					className={css({
						bgColor: "#004B88",
						padding: "26px 62px",
						fontSize: "22px",
						fontWeight: "bold",
						color: "white",
						borderRadius: "0px 0px 0px 8px",
					})}
				>
					申し込みはこちら
				</button>
			</div>
		</header>
	);
}
