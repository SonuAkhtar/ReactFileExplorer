export const ExplorerData = {
  name: "Root",
  isFolder: true,
  items: [
    {
      name: "node_modules",
      isFolder: true,
      items: [
        { name: "Explorer.jsx", isFolder: false, items: [] },
        { name: "explorer.css", isFolder: false, items: [] },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            { name: "Explorer.jsx", isFolder: false, items: [] },
            { name: "explorer.css", isFolder: false, items: [] },
          ],
        },
        { name: "App.jsx", isFolder: false, items: [] },
        { name: "index.css", isFolder: false, items: [] },
        { name: "main.jsx", isFolder: false, items: [] },
      ],
    },
    { name: ".gitignore", isFolder: false, items: [] },
    { name: "index.html", isFolder: false, items: [] },
    { name: "package.json", isFolder: false, items: [] },
    { name: "readme.md", isFolder: false, items: [] },
  ],
};
