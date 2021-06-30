export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60dc7fb34968f12f86143021",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yvsewmvx",
                  apiId: "84830143-e183-4b61-b361-5adb3e84e2c6",
                },
                {
                  buildHookId: "60dc7fb32e87dd2af6f0012f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-hbo55trd",
                  apiId: "a2ed6ead-9609-419e-9f69-01209a19fadb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/torstenbm/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-hbo55trd.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
