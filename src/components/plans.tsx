"use client";

import React, { type ReactNode, useState } from "react";
import Slider from "react-slick";
import styles from "@/styles/plans.module.scss";
import "@/styles/custom-slick.scss";

function NextArrow(props: any) {
	const { onClick } = props;
	return (
		<div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
			<img src="/arrow-left.svg" alt="arrow-left" />
		</div>
	);
}

function PrevArrow(props: any) {
	const { onClick } = props;
	return (
		<div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
			<img src="/arrow-right.svg" alt="arrow-right" />
		</div>
	);
}

export default function Plans() {
	const Plans = [
		{
			title: "博多の歴史",
			price: 1000,
		},
		{
			title: "プラン2",
			price: 2000,
		},
		{
			title: "プラン3",
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
		<div>
			<Slider {...settings} className={styles.plans}>
				{Plans.map((plan) => (
					<>
						<div key={plan.title} className={styles.planSlider}>
							<h3>{plan.title}</h3>
							<p>{plan.price}</p>
						</div>
						<div key={plan.title}>
							<h3>{plan.title}</h3>
							<p>{plan.price}</p>
						</div>
					</>
				))}
			</Slider>
		</div>
	);
}
