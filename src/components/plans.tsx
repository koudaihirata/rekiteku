"use client";

import React, { useState, useRef, useEffect } from "react";
import { css } from "../../styled-system/css";
import Link from "next/link";

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

	const [currentPlan, setCurrentPlan] = useState(0);
	const [currentPlace, setCurrentPlace] = useState(0);

	function NextSlide() {
		setCurrentPlan((prev) => (prev === Plans.length - 1 ? 0 : prev + 1));
	}

	function PrevSlide() {
		setCurrentPlan((prev) => (prev === 0 ? Plans.length - 1 : prev - 1));
	}

	const placesRef = useRef<HTMLDivElement>(null);

	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const windowHeight = window.innerHeight;

		const handleScroll = () => {
			if (placesRef.current) {
				const rect = placesRef.current.getBoundingClientRect();
				const placesTop = rect.top;
				const placesHeight = rect.height;

				const scrollPosition = window.scrollY;
				const start = placesTop + scrollPosition;
				const end = start + placesHeight - windowHeight;

				setProgress((scrollPosition - start) / (end - start));
				const newPlaceIndex = Math.min(
					Math.max(
						Math.floor(progress * (Plans[currentPlan].places?.length ?? 0)),
						0,
					),
					(Plans[currentPlan].places?.length ?? 1) - 1,
				);

				setCurrentPlace(newPlaceIndex);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [currentPlan, progress]);

	return (
		<div
			className={css({
				bg: "#FFFCF1",
				pb: "64px",
			})}
		>
			<div
				className={css({
					h: "500px",
					// mb: "80px",
					pos: "relative",
				})}
			>
				<img
					src={Plans[currentPlan].img}
					alt=""
					className={css({
						pos: "absolute",
						w: "100%",
						h: "100%",
						objectFit: "cover",
					})}
				/>
				<div
					className={css({
						pos: "relative",
						zIndex: "1",
					})}
				>
					<h3>{Plans[currentPlan].title}</h3>
					<p>{Plans[currentPlan].description}</p>
					<p>{Plans[currentPlan].price}</p>
				</div>
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
			</div>
			<div
				className={css({
					w: "100%",
				})}
				style={{
					height: `${100 * ((Plans[currentPlan].places?.length ?? 0) + 0)}vh`,
				}}
				ref={placesRef}
			>
				<div
					className={css({
						w: "100%",
						h: "100vh",
						maxH: "100vh",
						pos: "sticky",
						top: 0,
						overflow: "hidden",
					})}
				>
					<div
						className={css({
							h: "80px",
							w: "100%",
							display: "flex",
							pos: "absolute",
							p: "8px",
							gap: "16px",
							top: 0,
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
									bgColor: currentPlan === index ? "#F19813" : "transparent",
									color: currentPlan === index ? "#fff" : "inherit",
								})}
								onClick={() => setCurrentPlan(index)}
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
					<div
						className={css({
							pos: "absolute",
							bottom: "32px",
							w: "100%",
							h: "12px",
							bg: "#eee",
							// pos: "relative",
							// overflow: "hidden",
						})}
					>
						<div
							className={css({
								h: "100%",
								bg: "#F19813",
								pos: "relative",
							})}
							style={{ width: `${progress * 100}%` }}
						>
							<div
								className={css({
									rounded: "50%",
									w: "24px",
									h: "24px",
									bottom: "50%",
									right: "0",
									transform: "translate(50%,50%)",
									bg: "#F19813",
									pos: "absolute",
								})}
							/>
						</div>
					</div>
					<div
						className={css({
							w: "100%",
							h: "100%",
							p: "144px 64px 96px",
							pt: "",
						})}
					>
						<div
							className={css({
								w: "100%",
								h: "100%",
								bg: "#F19813",
								p: "16px",
								rounded: "40px",
							})}
						>
							{Plans[currentPlan].places?.map((place, index) => (
								<div
									key={place.name}
									className={css({
										pos: "relative",
										w: "100%",
										h: "100%",
										gap: "16px",
									})}
									style={{
										display: currentPlace === index ? "flex" : "none",
									}}
								>
									<h4
										className={css({
											pos: "absolute",
											fontSize: "40px",
											color: "#fff",
											bg: "#F19813",
											roundedBottomRight: "26px",
											roundedTopLeft: "10px",
											fontWeight: "bold",
											p: "0 32px",
										})}
									>
										{place.name}
									</h4>
									<div
										className={css({
											w: "100%",
											h: "100%",
											rounded: "26px",
											overflow: "hidden",
										})}
									>
										<img
											src={place.img}
											alt={place.name}
											className={css({
												w: "100%",
												h: "100%",
												objectFit: "cover",
											})}
										/>
									</div>
									<p
										className={css({
											display: "grid",
											placeItems: "center",
											lineHeight: "2",
											bg: "#fff",
											rounded: "26px",
											p: "16px",
											w: "400px",
										})}
									>
										{place.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<a
				href="#"
				className={css({
					display: "block",
					w: "fit-content",
					rounded: "8px",
					p: "24px 64px",
					background: "#F19813",
					boxShadow: "0px 2px 8px 0px #F1981380",
					m: "0 auto",
				})}
			>
				<p
					className={css({
						// w: "320px",
						color: "#fff",
						fontSize: "24px",
						fontWeight: "bold",
					})}
				>
					お申し込みはこちら
				</p>
				<div
					className={css({
						w: "100%",
						h: "2px",
						bg: "#fff",
					})}
				/>
			</a>
		</div>
	);
}
