import React from 'react'
import { withRouter } from 'react-router-dom'
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phase1: false,
            phase2: false
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            var scrolled = document.documentElement.scrollTop / window.innerHeight
            if (scrolled <= 0.5) {
                this.setState({ phase1: true })
            } else {
                this.setState({ phase1: false })
            }
            if (scrolled <= 1) {
                this.setState({ phase2: true })
            } else {
                this.setState({ phase2: false })
            }
        }
    }

    render() {
        return (
            <>
                <div className='box1 centering '>
                    <p className='maintext'>New wows</p>
                    <p className='subtext'>あなたを「ワッ」と言わせるもの</p>
                </div>
                <div className={this.state.phase1 ? 'box1-1' : 'box1-1 afterdisplay'}>
                    <div className='box2 centering '>
                        <p className='maintext'>EVENTS</p>
                    </div>
                    <div className={this.state.phase1 ? 'box3' : 'box3 after-scroll'}>
                        <div className='box3-1 L1 centering'><div className='centering'><p>研究発表</p></div></div>
                        <div id='booklet' className='box3-1 R1 centering'><div className='centering'><p>小冊子</p></div></div>
                        <div id='quiz' className='box3-1 L1 centering'><div className='centering'><p>クイズ</p></div></div>
                        <div className='box3-1 R1 centering'><div className='centering'><p>コンテスト</p></div></div>
                    </div>
                </div>
                <div className='box1-1'>
                    <div className='box2 centering '>
                        <p className='maintext'>EXHIBITIONS</p>
                    </div>
                    <div className={this.state.phase2 ? 'box3 afterdisplay' : 'box3'}>
                        <div id='daibo' className='box3-1 L1 centering'><div className='centering'><p>大ボード</p></div></div>
                        <div id='module' className='box3-1 R1 centering'><div className='centering'><p>モジュール</p></div></div>
                        <div className='box3-1 L1 centering'><div className='centering'><p>HOボード</p></div></div>
                    </div>
                </div>
                <div className='box1-1'>
                    <div className='box2 centering '>
                        <p className='maintext'>ABOUT</p>
                    </div>
                    <div className={this.state.phase3 ? 'box3' : 'box3 after-scroll'}>
                        <div id='daibo' className='box3-1 box3-2 centering'><div className='centering'><p>アクセス</p></div></div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Home)