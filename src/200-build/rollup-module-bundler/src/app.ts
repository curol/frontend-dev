import { helloWorld, log } from './scripts/lib'
import './styles/app.css'

/**
 * AppProps
 *
 * App properties.
 */
export interface AppProps {
  /**
   * Message to log.
   */
  message: string
  /**
   * App name.
   */
  name?: string
  /**
   * App version.
   */
  version?: string
}

const App = ({ message, name, version }: AppProps) => {
  const state: AppProps = { message }
  state.name = name
  state.version = version

  helloWorld()
  log(message)
}

export default App
