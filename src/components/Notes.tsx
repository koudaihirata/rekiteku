// app/components/Notes.tsx
"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { css } from '../../styled-system/css';
import Image from 'next/image';

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
        console.log(fetchedItems); // 追加: フェッチしたデータをコンソールに出力
        setItems(fetchedItems);
        };

        fetchData();
    }, []);

    return (
        <div className={css({width:'100%'})}>
            <section className={css({width:'70%',height:'510',margin:'0 auto',rounded:'40px',bgColor:'#F19813',p:'20px 40px'})}>
                <h3 className={css({fontSize:'28px',fontWeight:'semibold',color:'white'})}>公式ブログ（Note）</h3>
                <div className={css({w:'100%',display:'flex',justifyContent:'space-between',gap:'35px',mt:'12px',flexWrap:'wrap'})}>
                    {items.length > 0 ? (
                        items.map((item) => (
                        <article key={item.guid[0]} className={css({width:'350px',height:'400px',bgColor:'white',rounded:'8px'})}>
                            <img src={item['media:thumbnail'][0]} alt={item.title[0]} className={css({rounded:'8px 8px 0 0'})}/>
                            <div className={css({w:'90%',m:'0 auto'})}>
                                <div className={css({display:'flex',alignItems:'center'})}>
                                    <div className={css({display:'flex',alignItems:'center',mt:'16px',gap:'8px'})}>
                                        <Image src='/歴てくロゴ.png' alt='歴てくロゴ' width={32} height={32}/>
                                        <p>{item['note:creatorName'][0]}</p>
                                    </div>
                                    <time>{formatDate(item.pubDate[0])}</time>
                                </div>
                                <h4 className={css({fontSize:'20px',fontWeight:'bold'})}>{item.title[0]}</h4>
                                {/* <div>{parseHtml(item.description[0], item.guid[0])}</div> */}
                            </div>
                        </article>
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
return Array.from(doc.body.childNodes).map((node, index) => {
    const key = `${parentKey}-${index}`;
    if (node.nodeType === Node.TEXT_NODE) {
    return <span key={key}>{node.textContent}</span>;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as HTMLElement;
    const tagName = element.tagName.toLowerCase();

    const attributes: { [key: string]: string } = {};
    for (const attr of Array.from(element.attributes)) {
        attributes[attr.name] = attr.value;
    }

    const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    if (voidElements.includes(tagName)) {
        return React.createElement(tagName, { key, ...attributes });
    }

    const children: React.ReactNode[] = parseHtml(element.innerHTML, key);

    return React.createElement(tagName, { key, ...attributes }, children);
    }
    return null;
});
}
