import Image from "next/image";
import { css } from "../../styled-system/css";


export default function Profile() {
    return(
        <>
            <div className={css({width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',bg:'#FFFCF1'})}>
                <Image src='/Profile.jpg' alt="プロフィール" width={1200} height={540} className={css({rounded:'40px'})} />
            </div>
        </>
    )
}