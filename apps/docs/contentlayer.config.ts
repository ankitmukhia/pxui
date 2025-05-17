import { makeSource } from 'contentlayer2/source-files'
import { Ui } from './contents/definations/ui'

export default makeSource({
	contentDirPath: 'contents',
	documentTypes: [Ui]
})
