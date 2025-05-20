import { defineDocumentType } from "contentlayer2/source-files";

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
  },
}));
