import React from 'react'
import { withRouter } from 'react-router-dom'
// import Header from '../components/header'
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phase1: true,
            phase2: true
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            var scrolled = window.scrollY / window.innerHeight
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
            if (scrolled <= 1.5) {
                this.setState({ phase3: true })
            } else {
                this.setState({ phase3: false })
            }
        }
    }
    handletoKenkyu = () => {
        this.props.history.push('/kenkyu')
    }
    handletoBooklet = () => {
        this.props.history.push('/booklet')
    }
    handletoQuiz = () => {
        this.props.history.push('/quiz')
    }
    handletoContest = () => {
        this.props.history.push('/contest')
    }
    handletoBigboard = () => {
        this.props.history.push('/bigboard')
    }
    handletoModule = () => {
        this.props.history.push('/module')
    }
    handletoAccess = () => {
        window.location.href = 'https://634-annivfest.jp/acsess.html'
    }

    render() {
        return (
            <>
                {/* <Header /> */}
                <div className='box1 centering '>
                    <p className='maintext'>New wows</p>
                    <p className='subtext'>あなたを「ワッ」と言わせるもの</p>
                </div>
                <div className={this.state.phase1 ? 'box1-1' : 'box1-1 afterdisplay'}>
                    <div className='box2 centering '>
                        <p className='maintext'>EVENTS</p>
                    </div>
                    <div className={this.state.phase1 ? 'box3' : 'box3 after-scroll'}>
                        <div onClick={this.handletoKenkyu} id='kenkyu' className='box3-1 L1 centering'><div className='centering'><p>研究発表</p></div></div>
                        <div onClick={this.handletoBooklet} id='booklet' className='box3-1 R1 L2 centering'><div className='centering'><p>小冊子</p></div></div>
                        <div onClick={this.handletoQuiz} id='quiz' className='box3-1 L1 R2 centering'><div className='centering'><p>クイズ</p></div></div>
                        <div onClick={this.handletoContest} className='box3-1 R1 centering'><div className='centering'><p>モジュール<br />コンテスト</p></div></div>
                    </div>
                </div>
                <div className={this.state.phase2 ? 'box1-1' : 'box1-1 afterdisplay'}>
                    <div className='box2 centering '>
                        <p className='maintext'>EXHIBITIONS</p>
                    </div>
                    <div className={this.state.phase2 ? 'box3' : 'box3 after-scroll'}>
                        <div onClick={this.handletoBigboard} id='daibo' className='box3-1 L1 centering'><div className='centering'><p>大ボード</p></div></div>
                        <div onClick={this.handletoModule} id='module' className='box3-1 R1 centering'><div className='centering'><p>モジュール</p></div></div>
                        {/* <div onClick={this.handletoHoboard} className='box3-1 L1 centering'><div className='centering'><p>HOボード</p></div></div> */}
                    </div>
                </div>
                <div className={this.state.phase3 ? 'box1-1' : 'box1-1 afterdisplay'}>
                    <div className='box2 centering '>
                        <p className='maintext'>ABOUT</p>
                    </div>
                    <div className={this.state.phase3 ? 'box3' : 'box3 after-scroll'}>
                        <div onClick={this.handletoAccess} id='access' className='box3-1 box3-2 centering'><div className='centering'><p>アクセス</p><span className='smalltext'>第97回武蔵記念祭の公式サイトに移動します</span></div></div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Home)