import React from 'react'
import { withRouter } from 'react-router-dom'
import './header.css'
class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menu: false
        }
    }

    menuClicked = () => {
        this.setState({ menu: !this.state.menu })
    }
    handletoHome = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <>
                <div className='header'>
                    <div onClick={this.handletoHome} className='header-text maintext'><p>97th Annivfest</p></div>
                    <div className={this.state.menu ? 'menu-button open' : 'menu-button'} onClick={this.menuClicked}>
                        <div className='top'></div>
                        <div className='center'></div>
                        <div className='bottom'></div>
                    </div>
                </div>
                <div className={this.state.menu ? 'menu visible' : 'menu'} >

                </div>
            </>
        )
    }
}

export default withRouter(Header)