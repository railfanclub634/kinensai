import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Kenkyu from './components/kenkyu'
import Booklet from './components/booklet'
import BookletViwer from './components/booklet-viwer'
import Quiz from './components/quiz'
import Contest from './components/contest'
import Module from './components/module'
import Bigboard from './components/bigboard'

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/contest' component={Contest} />
        <Route path='/kenkyu' component={Kenkyu} />
        <Route path='/booklet' component={Booklet} />
        <Route path='/booklet-viwer' component={BookletViwer} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/module' component={Module} />
        <Route path='/bigboard' component={Bigboard} />
        <div className='footer'>
          <p>©2019 武蔵高等学校中学校鉄道研究部</p>
        </div>
      </>
    )
  }
}

export default withRouter(App)
