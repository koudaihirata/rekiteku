"use client";

import React, { useState, useRef, useEffect } from "react";
// import styles from "@/styles/plans.module.scss";
import { css } from "../../styled-system/css";
// import "@/styles/custom-slick.scss";

export default function Plans() {
	const Plans = [
		{
			title: "博多の歴史　古代〜平安",
			description: "古代から平安まで、時間の流れに沿って学べる福岡での旅行",
			img: "/plans/plan1.jpg",
			price: 1000,
			places: [
				{
					name: "板付遺跡",
					img: "/plans/itaduke.jpg",
					description:
						"竪穴住居をイメージした板付遺跡弥生館では、板付遺跡のムラの人々がどのような生活をしていたのか、出土遺物の展示や映像、ジオラマを見たり、復元した道具を触って確かめることができます。",
				},
				{
					name: "水城",
					img: "/plans/mizuki.jpg",
					description:
						"唐（とう）・新羅（しらぎ）の侵攻のおそれが高まっていく中、日本は664年、太宰府地域の平野をふさぐよう、巨大な堤「水城（みずき）」をつくり、さらに翌665年には、北の大城山（おおきやま・四王寺山・しおうじやま）に「大野城（おおのじょう）」、南の基山（きやま）に「基肄城（きいじょう）」を築きます。",
				},
				{
					name: "太宰府天満宮",
					img: "/plans/dazaifu.jpg",
					description:
						"太宰府天満宮は、御祭神 菅原道真公の御墓所の上に築かれています。ここは、道真公が天神さまとなり、永遠にお鎮まりになられる神聖な場所です。1,100年以上に亘り、天神さまは学問の神様、文化芸術の神様、厄除けの神様などと広く崇敬され、人々の心のよりどころとしていまもなお信仰され続けています。太宰府天満宮は全国天満宮の総本宮であり、道真公の御墓所として唯一無二の聖地「菅聖庿（かんせいびょう）」と称えられています。",
				},
				{
					name: "鴻臚館",
					img: "/plans/kourokan.jpg",
					description:
						"鴻臚館（こうろかん）は飛鳥・奈良・平安時代の外交施設です。中国大陸や朝鮮半島からの使節団の迎賓館として、また日本の外交使節である遣唐使や遣新羅使の宿泊所としても使用されました。同様の施設は、京都（平安京）・大阪（難波）にも設けられましたが、遺跡が確認され、国指定の史跡となっているのは筑紫の鴻臚館のみです。",
				},
				{
					name: "今津元寇防塁",
					img: "/plans/genkoubourui.jpg",
					description:
						"鎌倉時代、蒙古が来襲した文永の役（1274年）の後、再度の来襲に備えて、博多湾に沿った今津から香椎までの約20ｋｍの海岸に築かれた石築地が元寇防塁です。築造は九州の9か国に区域が割り当てられ、農民を働き手に特殊な工法を採用してわずか半年で造ったといわれています。",
				},
				{
					name: "志賀島・蒙古塚",
					img: "/plans/moukozuka.jpg",
					description:
						"文永・弘安の役（1274・1281年）で戦死した蒙古兵士供養のため、昭和2年に建設された石碑である。また張作霖書による「蒙古軍供養塔賛」の碑も建てられている。かつては北側の丘陵上にあったものであるが、平成17年の福岡県西方沖地震により大きな被害にあったため、南側の現在地に移されたものである。海を隔て、毘沙門岳と柑子岳にはさまれた今津の海岸線が美しい。",
				},
				{
					name: "多々良浜の戦い古戦場跡",
					img: "/plans/noImage.jpg",
					description:
						"京都の合戦で敗れ、九州まで逃れた足利尊氏は、延元元年（1336）宗像大宮司らの援軍を得て、多々良川右岸丘陵に陣どり、肥後の菊池武敏が率いる九州勢の大軍を迎え撃った。当時、この付近一帯は戦場となり激戦が展開されたところで、戦いは菊池側の松浦、神崎ら諸軍の裏切りから乱軍となり、形勢は尊氏側に傾いた。余勢をかった尊氏は京に上り、室町幕府を築いた。",
				},
				{
					name: "箱崎八幡宮",
					img: "/plans/hakozakihatimannjinnja.jpg",
					description:
						"筥崎宮は筥崎八幡宮とも称し、宇佐、石清水両宮とともに日本三大八幡宮に数えられます。 御祭神は筑紫国蚊田（かだ）の里、現在の福岡県宇美町にお生まれになられた応神天皇（第十五代天皇）を主祭神として、神功皇后、玉依姫命がお祀りされています。",
				},
			],
		},
		{
			title: "プラン2",
			img: "/plans/plan1.jpg",
			price: 2000,
			places: [
				{
					name: "板付遺跡",
					img: "/plans/itaduke.jpg",
					description:
						"竪穴住居をイメージした板付遺跡弥生館では、板付遺跡のムラの人々がどのような生活をしていたのか、出土遺物の展示や映像、ジオラマを見たり、復元した道具を触って確かめることができます。",
				},
				{
					name: "水城",

					description:
						"唐（とう）・新羅（しらぎ）の侵攻のおそれが高まっていく中、日本は664年、太宰府地域の平野をふさぐよう、巨大な堤「水城（みずき）」をつくり、さらに翌665年には、北の大城山（おおきやま・四王寺山・しおうじやま）に「大野城（おおのじょう）」、南の基山（きやま）に「基肄城（きいじょう）」を築きます。",
				},
				{
					name: "博多の歴史",
					description:
						"博多の歴史を学ぶことができる施設です。博多の歴史を学ぶことができる施設です。博多の歴史を学ぶことができる施設です。博多の歴史を学ぶことができる施設です。",
				},
			],
		},
		{
			title: "プラン3",
			img: "/plans/plan1.jpg",
			price: 3000,
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	function NextSlide() {
		setCurrentSlide((prev) => (prev === Plans.length - 1 ? 0 : prev + 1));
	}

	function PrevSlide() {
		setCurrentSlide((prev) => (prev === 0 ? Plans.length - 1 : prev - 1));
	}

	return (
		<div>
			<div
				className={css({
					h: "500px",
					mb: "80px",
					pos: "relative",
				})}
			>
				<img
					src={Plans[currentSlide].img}
					alt=""
					className={css({
						pos: "absolute",
						zIndex: "-1",
						w: "100%",
						h: "100%",
						objectFit: "cover",
					})}
				/>
				<h3>{Plans[currentSlide].title}</h3>
				<p>{Plans[currentSlide].description}</p>
				<p>{Plans[currentSlide].price}</p>
				<button
					className={css({
						w: "40px",
						h: "40px",
						pos: "absolute",
						top: "250px",
						transform: "translateY(-50%)",
						zIndex: "1",
						cursor: "pointer",
						left: "16px",
					})}
					onClick={PrevSlide}
					type="button"
				>
					<img
						src="/arrow-right.svg"
						alt=""
						className={css({
							w: "100%",
							h: "100%",
							objectFit: "contain",
						})}
					/>
				</button>
				<button
					className={css({
						w: "40px",
						h: "40px",
						pos: "absolute",
						top: "250px",
						transform: "translateY(-50%)",
						zIndex: "1",
						cursor: "pointer",
						right: "16px",
					})}
					onClick={NextSlide}
					type="button"
				>
					<img
						src="/arrow-left.svg"
						alt=""
						className={css({
							w: "100%",
							h: "100%",
							objectFit: "contain",
						})}
					/>
				</button>
				<div
					className={css({
						h: "80px",
						w: "100%",
						display: "flex",
						pos: "absolute",
						top: "100%",
						p: "8px",
						gap: "16px",
					})}
				>
					{Plans.map((plans, index) => (
						<button
							type="button"
							key={plans.title}
							className={css({
								display: "grid",
								placeItems: "center",
								h: "100%",
								w: "100%",
								borderRadius: "8px",
								transition: "all .2s",
								pos: "relative",
								bgColor: currentSlide === index ? "#F19813" : "transparent",
								color: currentSlide === index ? "#fff" : "inherit",
							})}
							onClick={() => setCurrentSlide(index)}
						>
							{plans.title}
							{index !== Plans.length - 1 && (
								<div
									className={css({
										pos: "absolute",
										left: "calc(100% + 8px - 2px)",
										content: "''",
										w: "4px",
										h: "80%",
										borderRadius: "50vw",
										bg: "#eee",
									})}
								/>
							)}
						</button>
					))}
				</div>
			</div>
			<div
				className={css({
					w: "100%",
					// h: "100vh",
					// display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// overflow: "hidden",
				})}
			>
				{Plans[currentSlide].places?.map((place) => (
					<div key={place.name} className={css({ minW: "100%" })}>
						<h4>{place.name}</h4>
						<div className={css({ w: "50px", h: "50px" })}>
							<img
								src={place.img}
								alt={place.name}
								className={css({ w: "100%", h: "100%", objectFit: "cover" })}
							/>
						</div>
						<p>{place.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
