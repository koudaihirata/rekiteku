import Image from "next/image";
import { css } from "../../styled-system/css";


export default function Profile() {
    return(
        <>
            <div className={css({width:'100%',h:'100vh',display:'flex',alignItems:'center',justifyContent:'center'})}>
                <div className={css({w:'85%',maxW:'1200px',h:'540px',m:'0 auto',bg:'#F19813',rounded:'40px',display:'flex',p:'16px'})}>
                    <Image src='/Profilephoto.png' alt="写真" width={450} height={500} className={css({w:'40%',h:'100%'})}/>
                    <section className={css({w:'60%',p:'16px 16px 0 16px'})}>
                        <h3 className={css({fontSize:'40px',fontWeight:'bold',color:'#fff'})}>吉丸宣孝</h3>
                        <div className={css({p:'32px',bg:'#fff',rounded:'26px',mt:'12px',w:'100%',h:'420px'})}>
                            <p className={css({lineHeight:'2rem'})}>
                                敬天愛人をモットーに、真田信繁や西郷隆盛、土方歳三、そして稲盛和夫さんを尊敬している。趣味は史跡巡り、読書、野球観戦、そして宴会。
                            </p>
                            <p className={css({lineHeight:'2rem',mt:'40px'})}>
                                教育の道を歩み、中高の社会科と国語の教員免許、また国内旅行業務取扱管理者を取得。スポーツにも興味があり、ダイビングと剣道初段の資格を取得しています。<br />
                                福岡市東区香椎で生まれ育ち、早稲田大学教育学部社会科地理歴史専修を卒業。その後、米テキサス州で語学留学を経験しました。
                            </p>
                            <p className={css({lineHeight:'2rem',mt:'40px'})}>
                                現在は西日本新聞社に所属し、本社編集センター、スポーツ編集本部、熊本、佐伯、宗像、田川、直方で勤務しています。
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}