import { css } from "../../styled-system/css";

export default function LeadText() {
    return(
        <>
            <section className={css({
                width:'100%',
                height:'450px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                position:'relative',
                _after: {
                    content:'""',
                    position:'absolute',
                    top:'0',
                    right:'8%',
                    width:'500px',
                    height:'500px',
                    bgImage:'url(/Footprints.svg)',
                    bgPosition:'center'
                }

                })}>
                <p className={css({textAlign:'center',fontSize:'20px',lineHeight:'64px',})}>
                    偉人が歩んだ道を辿り、遺跡や文明に触れることは、生き方に役立つ発見をもたらします。<br />
                    また、地域の歴史を遡り、史跡を巡ることで、その地域の歴史を肌で感じることができます。<br />
                    あなたが訪れたいと思う史跡をてくてく歩き、「<span className={css({fontWeight:'bold'})}>今後の人生の糧</span>」となるものや、<br />
                    「<span className={css({fontWeight:'bold'})}>地域のより深い魅力</span>」を見つけてみませんか？
                </p>
            </section>
        </>
    )
}