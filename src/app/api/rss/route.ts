import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import axios from 'axios';
import xml2js from 'xml2js';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';

type Thumbnail = string; // URLが文字列として格納される

type Item = {
  title: string[];
  'media:thumbnail'?: Thumbnail[];
  description: string[];
  link: string[];
  guid: string[];
  'note:creatorImage'?: string[];
  'note:creatorName'?: string[];
  pubDate?: string[];
};

type RSSChannel = {
  item: Item[];
};

type RSS = {
  rss: {
    channel: RSSChannel[];
  };
};

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const fetchRSSFeed = async (): Promise<RSS | null> => {
  const parser = new xml2js.Parser();
  const rssFeedUrl = 'https://note.com/reki_teku0531/rss/';

  try {
    const { data } = await axios.get(rssFeedUrl);
    const parsedData: RSS = await parser.parseStringPromise(data);
    // console.log(JSON.stringify(parsedData, null, 2)); // デバッグ出力
    return parsedData;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return null;
  }
};

export async function GET(request: NextRequest) {
  const parsedData = await fetchRSSFeed();
  if (parsedData) {
    const items = parsedData.rss.channel[0].item.map((item) => {
      const thumbnailUrl = item['media:thumbnail'] ? item['media:thumbnail'][0] : '';
      return {
        title: item.title,
        'media:thumbnail': thumbnailUrl ? [thumbnailUrl] : [],
        description: [DOMPurify.sanitize(item.description[0])],
        link: item.link,
        guid: item.guid,
        'note:creatorImage': item['note:creatorImage'] || [],
        'note:creatorName': item['note:creatorName'] || [],
        pubDate: item.pubDate || [],
      };
    });
    return NextResponse.json(items);
  }
  return NextResponse.json([]);
}
