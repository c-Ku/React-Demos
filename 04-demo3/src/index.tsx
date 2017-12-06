import * as path from 'object-path'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './Views/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();