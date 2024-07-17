import Image from "next/image";
import { css } from "../../styled-system/css";

import NextImage from "./NextImage";

export default function Profile() {
	return (
		<>
			<div
				className={css({
					padding: "128px 64px",
					display: "flex",
					bg: "#FFFCF1",
				})}
			>
				<div
					className={css({
						m: "0 auto",
						maxWidth: "1200px",
						bg: "#F19813",
						rounded: "40px",
						display: "flex",
						p: "16px",
						gap: "16px",
					})}
				>
					<div
						className={css({
							// minW: "450px",

							borderRadius: "26px",
							overflow: "hidden",
						})}
					>
						<img
							src="/Profilephoto.png"
							alt="写真"
							className={css({
								w: "100%",
								h: "100%",
								objectFit: "cover",
							})}
						/>
					</div>
					<section
						className={css({ maxW: "60%", display: "flex", flexDir: "column" })}
					>
						<h3
							className={css({
								fontSize: "40px",
								fontWeight: "bold",
								color: "#fff",
							})}
						>
							吉丸宣孝
						</h3>
						<div
							className={css({
								p: "32px",
								bg: "#fff",
								rounded: "26px",
								mt: "12px",
								h: "100%",
							})}
						>
							<p className={css({ lineHeight: "2rem" })}>
								敬天愛人をモットーに、真田信繁や西郷隆盛、土方歳三、そして稲盛和夫さんを尊敬している。趣味は史跡巡り、読書、野球観戦、そして宴会。
							</p>
							<p className={css({ lineHeight: "2rem", mt: "40px" })}>
								教育の道を歩み、中高の社会科と国語の教員免許、また国内旅行業務取扱管理者を取得。スポーツにも興味があり、ダイビングと剣道初段の資格を取得しています。
								<br />
								福岡市東区香椎で生まれ育ち、早稲田大学教育学部社会科地理歴史専修を卒業。その後、米テキサス州で語学留学を経験しました。
							</p>
							<p className={css({ lineHeight: "2rem", mt: "40px" })}>
								現在は西日本新聞社に所属し、本社編集センター、スポーツ編集本部、熊本、佐伯、宗像、田川、直方で勤務しています。
							</p>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
