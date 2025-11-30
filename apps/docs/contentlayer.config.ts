import { makeSource } from "contentlayer2/source-files";
import rehypePreetyCode, { type Options } from "rehype-pretty-code";
import { Ui } from "./lib/definations/ui";

const options: Options = {
  theme: "plastic",
  keepBackground: false,
};

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Ui],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePreetyCode, options]],
  },
});
