import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getList } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.getList()
    console.dir(this)

  }
  render() {
    console.dir(this.props)
    let {list} = this.props
    list = list || []
    const listItems = list.map(item => (
      <div key={item}>{item}</div>  
    ))
    return (
      <div className="App">
        {listItems}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.dir(state)
  return {
    list: state.getList.list,
  }
}

const mapDispatch = (dispatch) => ({
  getList() {
    dispatch(getList())
  }
})
export default connect(mapStateToProps, mapDispatch)(App)
