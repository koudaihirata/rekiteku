// app/components/Notes.tsx
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { css } from '../../styled-system/css';
import Image from 'next/image';
import Link from 'next/link';

type Item = {
    title: string[];
    'media:thumbnail': string[];
    description: string[];
    link: string[];
    guid: string[];
    pubDate: string[];
    'note:creatorImage': string[];
    'note:creatorName': string[];
};

const fetchRSSFeed = async (): Promise<Item[]> => {
    try {
        const { data } = await axios.get('/api/rss');
        console.log(data);
        
        return data;
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return [];
    }
};

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return date.toLocaleDateString('ja-JP', options);
};

export default function Notes() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        const fetchedItems = await fetchRSSFeed();
        console.log(fetchedItems); 
        setItems(fetchedItems);
        };

        fetchData();
    }, []);

    return (
        <div className={css({width:'100%',bg:'#FFFCF1',h:'70vh'})}>
            <section className={css({width:'fit-content',height:'510',margin:'0 auto',rounded:'40px',bgColor:'#F19813',p:'20px 40px'})}>
                <h3 className={css({fontSize:'28px',fontWeight:'semibold',color:'white'})}>公式ブログ（Note）</h3>
                <div className={css({w:'100%',display:'flex',gap:'35px',mt:'12px',flexWrap:'wrap'})}>
                    {items.length > 0 ? (
                        items.slice(0, 3).map((item) => (
                            <Link key={item.guid[0]}  href={item.guid[0]} legacyBehavior passHref>
                                <a target="_blank" rel="noopener noreferrer" href={item.guid[0]}>
                                    <article className={css({width:'320px',height:'410px',bgColor:'white',rounded:'8px',boxShadow:'0px 2px 8px 0px rgba(0, 0, 0, 0.10)'})}>
                                        <img src={item['media:thumbnail'][0]} alt={item.title[0]} className={css({rounded:'8px 8px 0 0'})}/>
                                        <div className={css({w:'90%',m:'0 auto'})}>
                                            <div className={css({display:'flex',alignItems:'center',mt:'16px',justifyContent:'space-between'})}>
                                                <div className={css({display:'flex',alignItems:'center',gap:'8px'})}>
                                                    <Image src='/歴てくロゴ.png' alt='歴てくロゴ' width={32} height={32}/>
                                                    <p>{item['note:creatorName'][0]}</p>
                                                </div>
                                                <time>{formatDate(item.pubDate[0])}</time>
                                            </div>
                                            <h4 className={css({fontSize:'20px',fontWeight:'bold',mt:'18px'})}>{item.title[0]}</h4>
                                            <p className={css({height:'6rem',overflow:'hidden'})}>{parseHtml(item.description[0], item.guid[0])}</p>
                                            <p className={css({color:'#F19813',textAlign:'center',mt:'6px'})}>続きを見る</p>
                                        </div>
                                    </article>
                                </a>
                            </Link>
                        ))
                    ) : (
                        <p>読み込み中...</p> // データがない場合の表示
                    )}
                </div>
            </section>
        </div>
    );
}

function parseHtml(htmlString: string, parentKey: string): React.ReactNode[] {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    // <p>タグ全てを取得
    const pElements = doc.querySelectorAll('p');

    // React要素の配列を生成
    return Array.from(pElements).map((element, index) => {
        const key = `${parentKey}-${index}`;
        const id = element.getAttribute('id'); // <p>タグのIDを取得
        if (id) { // IDが存在する場合のみ、その<p>タグの内容を表示
            return <p key={key} id={id}>{element.textContent}</p>;
        }
        return null; // IDがない場合は表示しない
    }).filter(Boolean); // nullをフィルタリングして削除
}
