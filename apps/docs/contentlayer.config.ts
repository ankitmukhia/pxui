import { makeSource } from "contentlayer2/source-files";
import rehypePreetyCode from "rehype-pretty-code";
import { Ui } from "./contents/definations/ui";

const options = {
	theme: "one-dark-pro",
	keepBackground: false
}

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Ui],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePreetyCode, options]],
  },
});
