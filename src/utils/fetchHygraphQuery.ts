export type Message = {
  id: string;
  content: {
    [key: string]: string; // en, pt
  };
  reactions: {
    emoji: string;
    count: number;
    reactedBy: string[];
  }[];
};

type RawMessage = {
  id: string;
  localizations: {
    content: {
      html: string;
    };
  }[];
  reactions: {
    emoji: string;
    count: number;
    reactedBy: string[];
  }[];
};

export async function fetchHygraphQuery({ query }: { query: string }): Promise<{ messages: Message[] }> {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_SECRET}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  });

  const { data } = await response.json();

  const parsedMessages = data.messages.map((message: RawMessage) => ({
    ...message,
    content: {
      en: message.localizations[0]?.content.html,
      pt: message.localizations[1]?.content.html,
    },
  }));

  return parsedMessages;
}
