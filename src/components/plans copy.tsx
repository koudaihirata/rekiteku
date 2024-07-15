"use client";

import React, { useState, useRef, useEffect } from "react";
import type {
	ReactNode,
	MouseEventHandler,
	Key,
	KeyboardEventHandler,
	MouseEvent,
} from "react";
import Slider from "react-slick";
import styles from "@/styles/plans.module.scss";
import "@/styles/custom-slick.scss";

interface ArrowProps {
	onClick?: MouseEventHandler<HTMLDivElement>;
}

function NextArrow(props: ArrowProps) {
	const { onClick } = props;
	return (
		<div
			className={`${styles.arrow} ${styles.next}`}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === "Enter" && onClick) {
					onClick(e as unknown as MouseEvent<HTMLDivElement>);
				}
			}}
		>
			<img src="/arrow-left.svg" alt="arrow-left" />
		</div>
	);
}

function PrevArrow(props: ArrowProps) {
	const { onClick } = props;
	return (
		<div
			className={`${styles.arrow} ${styles.prev}`}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === "Enter" && onClick) {
					onClick(e as unknown as MouseEvent<HTMLDivElement>);
				}
			}}
		>
			<img src="/arrow-right.svg" alt="arrow-right" />
		</div>
	);
}

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

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		appendDots: (dots: ReactNode) => (
			<div>
				<ul>{dots}</ul>
			</div>
		),
		customPaging: (i: number) => <p>{Plans[i].title}</p>,
	};

	return (
		<Slider {...settings} className={styles.plans}>
			{Plans.map((plan) => (
				<div key={plan.title} className={styles.plan}>
					<div className={styles.planSlider}>
						<img src={plan.img} alt="" />
						<h3>{plan.title}</h3>
						<p>{plan.description}</p>
						<p>{plan.price}</p>
					</div>
					<div className={styles.places}>
						<div className={styles.places}>
							{plan.places?.map((place) => (
								<div key={place.name} className={styles.place}>
									<h4>{place.name}</h4>
									<img src={place.img} alt={place.name} />
									<p>{place.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
}
