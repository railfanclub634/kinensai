import React from 'react'
import { withRouter } from 'react-router-dom'
// import { Document, Page } from 'react-pdf'
import './article.css'
class VoteConfirm extends React.Component {

    handletoHome = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <div className='art-header header-moduleContest'></div>
                <div className='art-title'><p>投票ありがとうございました</p></div>
                <div className='art-data'>
                    <p>結果はモジュール付近に設置されているモニターで確認できます</p>
                    <div onClick={this.handletoHome} className='link-button'>トップページに戻る→</div>
                </div>
            </>
        )
    }
}

export default withRouter(VoteConfirm)