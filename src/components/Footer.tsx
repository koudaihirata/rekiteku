import Image from "next/image";
import { css } from "../../styled-system/css";
import Link from "next/link";


export default function Footer() {
    const NoteURL = "https://note.com/reki_teku0531/";
    const FacebookURL = "#";
    const XURL = "#";
    const InstagramURL = "#";
    const completionNumber = "00-00-000000";

    return(
        <>
            <footer className={css({width:'100%'})}>
                <div className={css({width:'85%',m:'68px auto 0',display:'flex'})}>
                    <div className={css({width:'60%'})}>
                        <Image src='/FooterLogo.svg' alt="歴てくロゴ" width={263} height={104}/>
                        <div className={css({display:'flex',alignItems:'center',gap:'40px',mt:'30px'})}>
                            <div>
                                <p>住所　　　福岡市西区横浜３丁目２７－１５</p>
                                <p>営業時間　10:00~18:00</p>
                                <p>店舗休日　月曜日・火曜日</p>
                            </div>
                            <div>
                                <p>加盟団体　一般社団法人全国旅行業協会</p>
                                <p>資格　　　国内旅行業取扱主任者<br />
                                　　　　　国内旅行業務旅程管理者</p>
                            </div>
                        </div>
                        <p className={css({fontSize:'20px',fontWeight:'bold',mt:'62px'})}>歴史は人生の教科書。てくてく歩いて「生き方」のお手伝い。</p>
                    </div>
                    <div className={css({width:'40%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'})}>
                        <div className={css({display:'flex',gap:'50px'})}>
                        <Link href={NoteURL} ><Image src='/NoteIcon.svg' alt="NoteIcon" width={50} height={50} /></Link>
                        <Link href={FacebookURL} ><Image src='/FacebookIcon.svg' alt="NoteIcon" width={50} height={50} /></Link>
                        <Link href={XURL} ><Image src='/XIcon.svg' alt="NoteIcon" width={50} height={50} /></Link>
                        <Link href={InstagramURL} ><Image src='/InstagramIcon.svg' alt="NoteIcon" width={50} height={50} /></Link>
                        </div>
                        <p className={css({fontSize:'20px',mt:'50px'})}>お問い合わせはこちら</p>
                        <div className={css({width:'400px',height:'100px',bg:'#F3F3F3',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'})}>
                            <Image src='/tel.svg' alt="電話番号" width={20} height={20}/>
                            <a href='tel:090-2395-2427'><p className={css({fontSize:'20px'})}>０９０－２３９５－２４２７</p></a>
                        </div>
                        <div className={css({display:'flex',alignItems:'center',gap:'10px',mt:'4px'})}>
                            <Image src='/mailto.svg' alt="メールアドレス" width={20} height={20}/>
                            <a href='mailto:yuki3086ny4403sdm@icloud.com'><p className={css({fontSize:'20px'})}>yuki3086ny4403sdm@icloud.com</p></a>
                        </div>
                    </div>
                </div>
                <div className={css({width:'100%',height:'70px',bg:'#F19813',mt:'64px'})}>
                    <div className={css({width:'85%',height:'100%',m:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between'})}>
                        <div className={css({display:'flex',gap:'24px'})}>
                            <Link href='#'><p className={css({color:'white',textDecoration:'underline'})}>プライバシーポリシー</p></Link>
                            <Link href='#'><p className={css({color:'white',textDecoration:'underline'})}>旅行業約款</p></Link>
                        </div>
                        <small className={css({color:'white'})}>&copy;2024 rekiteku️</small>
                        <p className={css({color:'white'})}>旅程管理研修修了番号　{completionNumber}</p>
                    </div>
                </div>
            </footer>
        </>
    )
}