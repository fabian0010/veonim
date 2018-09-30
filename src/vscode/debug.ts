import { DebugConfigurationProvider, registerDebugConfigProvider } from '../extensions/debuggers'
import * as vsc from 'vscode'

const debug: typeof vsc.debug = {
  registerDebugConfigurationProvider: (debugType: string, provider: DebugConfigurationProvider) => {
    const dispose = registerDebugConfigProvider(debugType, provider)
    return { dispose }
  },
}

export default debug
