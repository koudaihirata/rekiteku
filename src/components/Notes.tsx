// app/components/Notes.tsx
"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Item = {
  title: string[];
  'media:thumbnail': string[];
  description: string[];
  link: string[];
  guid: string[];
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
    <section>
      {items.length > 0 ? (
        items.map((item) => (
          <article key={item.guid[0]}>
            <h4>{item.title[0]}</h4>
            <img src={item['media:thumbnail'][0]} alt={item.title[0]} />
            <div>{parseHtml(item.description[0], item.guid[0])}</div>
            <a href={item.link[0]} target="_blank" rel="noopener noreferrer">続きをみる</a>
          </article>
        ))
      ) : (
        <p>404 not found</p> // データがない場合の表示
      )}
    </section>
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
