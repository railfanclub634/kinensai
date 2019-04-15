import React, { Component } from 'react'
import './App.css'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='box1 centering '>
          <p className='maintext'>New wows</p>
          <p className='subtext'>あなたを「ワッ」と言わせるもの</p>
        </div>
        <div className='box2 centering '>
          <p className='maintext'>EVENTS</p>
        </div>
        <div className='box3'>
          <div className='box3-1 L1 centering'><div className='centering'><p>研究発表</p></div></div>
          <div className='box3-1 R1 centering'><div className='centering'><p>小冊子</p></div></div>
          <div className='box3-1 L1 centering'><div className='centering'><p>コンテスト</p></div></div>
          <div id='quiz' className='box3-1 R1 centering'><div className='centering'><p>クイズ</p></div></div>
        </div>
        <div className='box2 centering '>
          <p className='maintext'>EXHIBITIONS</p>
        </div>
        <div className='box3'>

          <div id='daibo' className='box3-1 L1 centering'><div className='centering'><p>大ボード</p></div></div>
          <div className='box3-1 R1 centering'><div className='centering'><p>モジュール</p></div></div>
          <div className='box3-1 L1 centering'><div className='centering'><p>HOボード</p></div></div>
        </div>
      </>
    )
  }
}

export default App
