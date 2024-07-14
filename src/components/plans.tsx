"use client";

import React, { useState, useRef, useEffect } from "react";
// import styles from "@/styles/plans.module.scss";
import { css } from "../../styled-system/css";
// import "@/styles/custom-slick.scss";

export default function Plans() {
	const Plans = [
		{
			title: "博多の歴史",
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
