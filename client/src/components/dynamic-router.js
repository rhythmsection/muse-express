/*

The react-router style equivalent of redirecting in an HTTP call to original URL
using matching on alias in my firebase database.

*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import * as actions from '../actions'
import Alias from './alias'

class DynamicRouter extends Component {
  render() {
    return (
      <Router>
        <Route
          path='/:alias'
          component={Alias}
        />
      </Router>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    url: state.url
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DynamicRouter)
