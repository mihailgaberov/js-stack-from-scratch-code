/**
 * Created by Mihail on 4/16/2017.
 */
// @flow

import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = state => ({
  message: state.hello.get('message'),
})

export default connect(mapStateToProps)(Message)
