type WikiResult = {
  pageid: number;
  ns: number;
  title: string;
  index: number;
  thumbnail: {
    source: string;
    width?: number;
    height?: number;
  };
  pageimage: string;
  extract: string;
};

type GrayMatter = {
  data: {
    id: number;
    title: string;
    body: string;
  };
  content: string;
  excerpt: string;
  empty: string;
  isEmpty: boolean;
};
type Matter = (str: string) => GrayMatter;

type BlogPost = {
  id: string;
  date: string;
  title: string;
  body?: string;
};
