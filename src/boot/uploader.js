// globally registering your component in a boot file
import Uploader from '../workers/Uploader.js' // the file from above

export default ({ app }) => {
  app.component('Uploader', Uploader)
}

