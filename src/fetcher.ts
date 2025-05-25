import Parser from "rss-parser";

const ANNOUNCEMENT_RSS_URL =
  "https://cse.pusan.ac.kr/bbs/cse/2605/rssList.do?row=50";
const FALLBACK_VALUE = "UNKNOWN";

export interface Announcement {
  title: string;
  link: string;
  pubDate: Date;
  author: string;
  category: string[];
}

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  const parser = new Parser();
  const feed = await parser.parseURL(ANNOUNCEMENT_RSS_URL);

  return feed.items.map((item) => ({
    title: item.title || FALLBACK_VALUE,
    link: item.link || FALLBACK_VALUE,
    pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
    author: item.author || FALLBACK_VALUE,
    category: item.categories || [FALLBACK_VALUE],
  }));
};
