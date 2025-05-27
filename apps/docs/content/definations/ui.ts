import { defineDocumentType } from "contentlayer2/source-files";
import GithubSlugger from 'github-slugger';

export const Ui = defineDocumentType(() => ({
  name: "Ui",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    status: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      // button-01.md -> buton-01
      // replace(/\.mdx$/, "")
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        // Regex - extract all headers from markdown string
        // remember : start writing content after new two lines on mdx file.
        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();

        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              heading: flag?.length,
              content,
              slug: content ? slugger.slug(content) : undefined,
            };
          },
        );

        return headings;
      },
    },
  },
}));
