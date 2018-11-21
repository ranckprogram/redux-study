import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getList } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.getList() // 调用方法请求数据
  }

  render() {
    let {list} = this.props // 使用数据
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
  return {
    list: state.list
  }
}

const mapDispatch = (dispatch) => ({
  getList() {
    dispatch(getList())
  }
})
export default connect(mapStateToProps, mapDispatch)(App)
