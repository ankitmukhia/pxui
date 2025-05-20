import { makeSource } from "contentlayer2/source-files";
import rehypePreetyCode from "rehype-pretty-code";
import { Ui } from "./content/definations/ui";

const options = {
	theme: "one-dark-pro",
	keepBackground: false
}

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Ui],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePreetyCode, options]],
  },
});
