/**
 * Created by Mihail on 4/15/2017.
 */
// @flow

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

ReactDOM.render(<App />, document.querySelector(APP_CONTAINER_SELECTOR))
