import '../styles/globals.css'
import {GeneralProvier} from '../context/generalContext'

function MyApp({ Component, pageProps }) {
  return (
    <GeneralProvier>
      <Component {...pageProps} />
    </GeneralProvier>
  )
}

export default MyApp
