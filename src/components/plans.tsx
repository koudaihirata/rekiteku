"use client";

import React, { useState, useRef, useEffect } from "react";
import { css } from "../../styled-system/css";
import Link from "next/link";
import { flex } from "../../styled-system/patterns";

export default function Plans() {
	const Plans = [
		{
			title: "博多の歴史",
			subTitle: "古代〜平安",
			description: "古代から平安まで、時間の流れに沿って学べる博多旅行",
			img: "/plans/plan1.jpg",
			days: "2泊3日",
			periodStart: "2024年1月1日",
			price: "20,000円",
			people: "1~6人",

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
			title: "博多の歴史",
			subTitle: "室町〜江戸",
			img: "/plans/plan1.jpg",

			places: [
				{
					name: "四王寺城",
					img: "/plans/sioujijou.jpg",
					description:
						"宇美町・大野城市・太宰府市にまたがる四王寺山にある古代山城です。尾根には土塁、谷には石垣を築いて城壁としており、内部には多くの礎石建物跡があります。国指定特別史跡に指定されており、日本城郭協会が選定した日本100名城の1つでもあります。",
				},
				{
					name: "立花山城",
					img: "/plans/tatibanayamajou.jpg",
					description:
						"立花山城は福岡市、新宮町、久山町に跨る立花山に築かれた山城です。鎌倉時代或いは南北朝時代、豊後大友氏の一族・立花貞載が重要な貿易都市である博多を支配するために築城したと伝わります。",
				},
				{
					name: "名島城",
					img: "/plans/najimajou.jpg",
					description:
						"名島城はもと大友氏の根據地で、立花城の出城でした。天正十五年(一五八七)豊臣秀吉公が島津氏を降して九州を平定し、小早川隆景公を筑前の国守に任じ、この城を増強すると共に御座所を設けさせ、九州監察の中心としました。",
				},
				{
					name: "博多塀",
					img: "/plans/hakatabei.jpg",
					description:
						"「博多べい」は、石の基壇の上に練土で壁を築き上げ一番上に屋根瓦をのせた塀です。石は焼けた感じを出すために様々な色合いの由布院産の火山岩を使っています。それらをバランス良く築地塀の練土の中に埋め込んでいるのです。",
				},
				{
					name: "福岡城",
					img: "/plans/hukuokajou.jpg",
					description:
						"建造物はあまり残っていませんが、石垣や縄張りがほぼ当時のままの姿をとどめているため、国の史跡として指定されています。現存する多聞櫓等の建造物も見ごたえ十分です。(一五八七)豊臣秀吉公が島津氏を降して九州を平定し、小早川隆景公を筑前の国守に任じ、この城を増強すると共に御座所を設けさせ、九州監察の中心としました。",
				},
				{
					name: "福岡市博物館",
					img: "/plans/hukuokahakubutukan.jpg",
					description:
						"福岡市博物館は、平成2年（1990）の10月に、地域の歴史と民俗を研究・展示する博物館として開館しました。福岡は、弧を描く日本列島の西の端にあり、ユーラシア大陸と朝鮮半島に近接しています。この地に住む人々は、古来、この国の誰もが知らなかった文化に最初に触れ、経験したことのない生産手段や経済活動を発展させ、遭遇したことのない脅威を克服し、豊かな都市を営みつづけてきました。この博物館は、アジアとの人・もの・文化の交流がつくってきた特色ある歴史と、そこに生きる人びとのくらしを、さまざまなかたちで発信しています。",
				},
				{
					name: "野村望東尼宅",
					img: "/plans/noImage.jpg",
					description:
						"幕末の混乱した時代に、勤王歌人として、また志士の母として慕われた野村望東尼が、歌友荒瀬ゆり子宅で他界しました。宅跡は三田尻本町に、墓は桑山にあります。",
				},
				{
					name: "平野神社",
					img: "/plans/noImage.jpg",
					description:
						"京都市北部、平安京大内裏（平安宮）から北方の平野の地に鎮座する神社である。平安京遷都頃まで創建が遡るとされる神社で、近年の研究によると、元々は桓武天皇生母の高野新笠の祖神（桓武天皇外戚神）として平城京に祀られた神祠であったが、それが平安京遷都に伴って大内裏近くに移し祀られたことに始まると推測されている。古代には皇太子守護の性格を持ち、平安時代には例祭「平野祭」において皇太子自らにより奉幣が行われた。また、多くの臣籍降下氏族から氏神として歴史的に崇敬された神社としても知られる。",
				},
			],
		},
		{
			title: "偉人の道のり",
			img: "/plans/plan1.jpg",
			places: [
				{
					name: "立花山城",
					img: "/plans/tatibanayamajou.jpg",
					description:
						"立花山城は福岡市、新宮町、久山町に跨る立花山に築かれた山城です。鎌倉時代或いは南北朝時代、豊後大友氏の一族・立花貞載が重要な貿易都市である博多を支配するために築城したと伝わります。",
				},
				{
					name: "梅岳寺",
					img: "/plans/baigakuji.jpg",
					description:
						"立花山のふもとにあり、立花城主立花道雪とその母の墓がある。もとは花谷山神宮寺と称したが、母の法名と道雪の姓から立花山梅岳寺養老院と改称。境内全域が県の史跡で、県指定文化財の本堂のほか多数の木像がある。",
				},
				{
					name: "四王寺城",
					img: "/plans/sioujijou.jpg",
					description:
						"宇美町・大野城市・太宰府市にまたがる四王寺山にある古代山城です。尾根には土塁、谷には石垣を築いて城壁としており、内部には多くの礎石建物跡があります。国指定特別史跡に指定されており、日本城郭協会が選定した日本100名城の1つでもあります。",
				},
				{
					name: "観世音寺",
					img: "/plans/kanzeonnji.jpg",
					description:
						"かつて講堂に巨像が立ち並んでいた頃から、観世音寺の尊像群は人々を魅了している。しかしこの寺は火災や台風による被災の歴史もあり、この仏像群を後世に伝えるため保管の重要性が考えられてきた。そうした意見を受け１９５９年に正倉院風の収蔵庫が建てられ、仏像の大部分はここに収められている。",
				},
			],
		},
		{
			title: "海外に開かれた町",
			img: "/plans/plan1.jpg",
			price: 4000,
			places: [
				{
					name: "鴻臚館",
					img: "/plans/kourokan.jpg",
					description:
						"鴻臚館（こうろかん）は飛鳥・奈良・平安時代の外交施設です。中国大陸や朝鮮半島からの使節団の迎賓館として、また日本の外交使節である遣唐使や遣新羅使の宿泊所としても使用されました。s同様の施設は、京都（平安京）・大阪（難波）にも設けられましたが、遺跡が確認され、国指定の史跡となっているのは筑紫の鴻臚館のみです。",
				},
				{
					name: "福岡市博物館",
					img: "/plans/hukuokahakubutukan.jpg",
					description:
						"福岡市博物館は、平成2年（1990）の10月に、地域の歴史と民俗を研究・展示する博物館として開館しました。福岡は、弧を描く日本列島の西の端にあり、ユーラシア大陸と朝鮮半島に近接しています。この地に住む人々は、古来、この国の誰もが知らなかった文化に最初に触れ、経験したことのない生産手段や経済活動を発展させ、遭遇したことのない脅威を克服し、豊かな都市を営みつづけてきました。この博物館は、アジアとの人・もの・文化の交流がつくってきた特色ある歴史と、そこに生きる人びとのくらしを、さまざまなかたちで発信しています。",
				},
				{
					name: "西新・元寇防塁",
					img: "/plans/nisisin.jpg",
					description:
						"20kmにわたる元寇防塁のほぼ中間にあたるのが西新・百道地区の防塁。文永の役（1274年）では元軍がこの百道浜に上陸し、祖原、鳥飼、赤坂一帯が戦場となった。その後、この防塁が築かれた。大正9年、西新の防塁が発掘され、石塁が露出。昭和44年に本格的発掘調査が行われた。国指定史跡",
				},
				{
					name: "志賀島・金印公園",
					img: "/plans/kinninnkouenn.jpg",
					description:
						"紀元57年に後漢の光武帝（こうぶてい）が奴国（なこく）の王に与えたとされている「漢委奴国王（かんのわのなのこくおう ※読み方には他の解釈もあります）」と記された金印が、天明4（1784）年にこの付近で発見されたことを記念した公園です。出土した金印は国宝に指定され、現在、福岡市博物館に展示されています。",
				},
			],
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

	const [placesHeaderPl, setPlacesHeaderPl] = useState(8);
	const [placesHeaderPr, setPlacesHeaderPr] = useState(8);
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

				if (progress > 0) {
					setPlacesHeaderPl(80);
					setPlacesHeaderPr(300);
				} else {
					setPlacesHeaderPl(8);
					setPlacesHeaderPr(8);
				}
				setCurrentPlace(newPlaceIndex);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [currentPlan, progress]);

	useEffect(() => {
		document.documentElement.style.scrollBehavior = "smooth";
		return () => {
			document.documentElement.style.scrollBehavior = "auto";
		};
	}, []);

	return (
		<div
			id="plans"
			className={css({
				bg: "#FFFCF1",
				// pb: "64px",
				scrollBehavior: "smooth",
			})}
		>
			<div
				className={css({
					h: "500px",
					// mb: "80px",
					pos: "relative",
					// bg: "#F19813",
					// bg: `url('${Plans[currentPlan].img}')`,
				})}
				style={{
					// background: `url('${Plans[currentPlan].img}') center center / cover`,
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('${Plans[currentPlan].img}') center center / cover`,
				}}
			>
				{/* <img
					src={Plans[currentPlan].img}
					alt=""
					className={css({
						pos: "absolute",
						w: "100%",
						h: "100%",
						objectFit: "cover",
					})}
				/> */}
				<div
					className={css({
						pos: "relative",
						zIndex: "1",
					})}
				>
					<div
						className={css({
							p: "16px",
							color: "#fff",
							fontWeight: "bold",
							lineHeight: 1,
							display: "flex",
							flexDirection: "column",
							gap: "8px",
						})}
					>
						<div className={flex({ alignItems: "flex-end", gap: "16px" })}>
							<h3
								className={css({
									fontSize: "64px",
									w: "fit-content",
								})}
							>
								{Plans[currentPlan].title}
							</h3>
							<p
								className={css({
									fontSize: "24px",
									fontWeight: "bold",
									w: "fit-content",
								})}
							>
								{Plans[currentPlan].subTitle}
							</p>
						</div>
						<p
							className={css({
								fontSize: "32px",
								fontWeight: "bold",
								mb: "16px",
							})}
						>
							{Plans[currentPlan].days}
						</p>
						<p
							className={css({
								// lineHeight: 0,
							})}
						>
							{Plans[currentPlan].description}
						</p>
					</div>
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
					<a href="#plans">
						<div
							className={css({
								h: "80px",
								w: "100%",
								display: "flex",
								pos: "absolute",
								p: "8px",
								gap: "16px",
								top: 0,
								bg: "#fff",
								transition: "all .2s",
							})}
							style={{
								paddingLeft: `${placesHeaderPl}px`,
								paddingRight: `${placesHeaderPr}px`,
							}}
						>
							{Plans.map((plans, index) => (
								<button
									type="button"
									key={`${plans.title}-${plans.subTitle}`} // 修正箇所
									className={css({
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexWrap: "wrap",
										gap: "8px",
										h: "100%",
										w: "100%",
										borderRadius: "8px",
										transition: "all .2s",
										pos: "relative",
										fontSize: "20px",
										fontWeight: "bold",
										bgColor: currentPlan === index ? "#F19813" : "transparent",
										color: currentPlan === index ? "#fff" : "inherit",
									})}
									onClick={() => setCurrentPlan(index)}
								>
									{plans.title}
									<span
										className={css({
											fontSize: "16px",
										})}
									>
										{plans.subTitle}
									</span>
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
					</a>
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
											top: "-16px",
											left: "-16px",
											fontSize: "40px",
											color: "#fff",
											bg: "#F19813",
											roundedBottomRight: "26px",
											roundedTopLeft: "40px",
											fontWeight: "bold",
											p: "8px 32px",
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
			<table
				className={css({
					m: "32px auto",
					fontSize: "18px",
					"& th": {
						p: "16px 0",
						textAlignLast: "justify",
						"&::after": {
							content: "''",
							display: "block",
							width: "100%",
							height: "4px",
							bg: "#F19813",
							rounded: "50vh",
						},
					},
					"& td": {
						p: "16px 0 ",
						pl: "32px",
					},
				})}
			>
				<tbody>
					<tr>
						<th>日付</th>
						<td>{`${Plans[currentPlan].days}(${Plans[currentPlan].periodStart}から)`}</td>
					</tr>
					<tr>
						<th>募集人数</th>
						<td>{Plans[currentPlan].people}</td>
					</tr>
					<tr>
						<th>料金</th>
						<td>{Plans[currentPlan].price}</td>
					</tr>
				</tbody>
			</table>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSdr-jVJyfM-1gLJy7D6IWtzhDEN8PpZ1xqtUH-lpV5QqpjZlg/viewform?usp=sf_link"
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
