import React from 'react'
import { withRouter } from 'react-router-dom'
import './article.css'

class Contest extends React.Component {

    render() {
        return (
            <>
                <div className='art-header header-moduleContest'></div>
                <div className='art-title'><p>モジュールコンテスト</p></div>
                <div className='art-data'>
                    <p>
                        comingsoon
                    </p>
                </div>
            </>
        )
    }
}

export default withRouter(Contest)