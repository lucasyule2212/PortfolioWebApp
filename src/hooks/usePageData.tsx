import { useQuery } from 'react-query';

type usePageDataProps = {
  page: string;
};

type Message = {
  _id: string;
  content: string;
  reactions: {
    emoji: string;
    count: number;
    reactedBy: string[];
  }[];
};

function getPageData(_page: string): Message[] {
  return [
    {
      _id: '1',
      content: `
      <h1>This is a 1st level heading</h1>
      <h2>This is a 2nd level heading</h2>
      <h3>This is a 3rd level heading</h3>
      <p>This 4th level heading will be converted to a paragraph, because levels are configured to be only 1, 2 or 3.</p>
      <blockquote>
        <p>This is a blockquote.</p>
      </blockquote>
      <p>
        <a href="https://google.com">This is a link</a>
      </p>
      <code>console.log('Hello, World!')</code>
    `,
      reactions: [
        {
          emoji: 'grinning',
          count: 3,
          reactedBy: ['lucas_yule', 'test', 'test2'],
        },
      ],
    },
  ];
}

export const usePageData = ({ page }: usePageDataProps) => {
  return useQuery(page, () => getPageData(page), {
    refetchOnWindowFocus: false,
  });
};
