import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './header.css'
class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menu: false,
            fix: false
        }
    }

    menuClicked = () => {
        this.setState({ menu: !this.state.menu })
    }
    handletoHome = () => {
        this.props.history.push('/')
    }
    componentDidMount() {
        window.onscroll = () => {
            var scrolled = window.scrollY / window.innerHeight

            if (scrolled <= 0.5) {
                this.setState({ fix: false })
            } else {
                this.setState({ fix: true })
            }
        }
    }
    render() {
        return (
            <>
                <div className={this.state.fix ? 'header fix' : 'header'}>
                    <div onClick={this.handletoHome} className='header-text maintext'><p>97th Annivfest</p></div>
                    <div className={this.state.menu ? 'menu-button open' : 'menu-button'} onClick={this.menuClicked}>
                        <div className='top'></div>
                        <div className='center'></div>
                        <div className='bottom'></div>
                    </div>
                </div>
                <div className={this.state.menu ? 'menu visible' : 'menu'} >
                    <p><Link to='/'>トップ</Link></p>
                    <p><Link to='/kenkyu'>研究発表</Link></p>
                    <p><Link to='/booklet'>小冊子</Link></p>
                    <p><Link to='/quiz'>クイズ</Link></p>
                    <p><Link to='/contest'>コンテスト</Link></p>
                    <p><Link to='/bigboard'>大ボード</Link></p>
                    <p><Link to='/module'>モジュール</Link></p>
                </div>
            </>
        )
    }
}

export default withRouter(Header)