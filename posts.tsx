export const posts = [
  {
    id: "1",
    title: "First Post",
    content:
      "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit <strong>bold</strong> <em>italic</em> <a href='https://google.com'>link</a></p>",
    createdAt: new Date().toISOString(),
    author: "Fahad",
  },
  {
    id: "2",
    title: "Second Post",
    content: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>",
    createdAt: new Date().toISOString(),
    author: "Fahad",
  },
  ...Array.from({ length: 18 }, (_, i) => ({
    id: (i + 3).toString(),
    title: `Post ${i + 3}`,
    content: `<p>Sample content for post ${
      i + 3
    } with <strong>bold</strong>, <em>italic</em>, and a <a href='https://example.com'>link</a>.</p>`,
    createdAt: new Date().toISOString(),
    author: "Fahad",
  })),
];
