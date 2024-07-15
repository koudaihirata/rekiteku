import Image from "next/image";
import { css } from "../../styled-system/css";


export default function FirstView() {
    return(
        <>
            <div className={css({width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'50px'})}>
                <Image src='/FirstViewImg.svg' alt="FirstView" width={600} height={450} />
                <h2 className={css({fontSize:'32px'})}>あなたの好きな歴史の軌跡を辿る</h2>
            </div>
        </>
    )
}