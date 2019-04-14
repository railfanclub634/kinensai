import React from 'react'
import './header.css'
class Header extends React.Component {

    menuClicked() {

    }
    // このコンポーネントの中にメニュー作るんだぞわかったな？？？？？？
    render() {
        return (
            <div className='header'>
                <div className='header-text maintext'><p>97th Annivfest</p></div>
                <div className='menu-button' onClick={this.menuClicked()}>
                    <div className='top'></div>
                    <div className='center'></div>
                    <div className='bottom'></div>
                </div>
            </div>
        )
    }
}

export default Header