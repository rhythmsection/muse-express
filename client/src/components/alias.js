/*

This needed a little more development with a normal server / using fetchUrl.

*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class Alias extends Component {

  componentDidMount = async () => {
    await this.props.actions.fetchUrl(this.props.match.params.alias)

    if (this.props.url.createdAt === undefined) {
      window.location = 'http://localhost:3000'
    } else {
      window.location = this.props.url.longUrl
    }
  }
  render() {
    return (
      null
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

export default connect(mapStateToProps, mapDispatchToProps)(Alias)
