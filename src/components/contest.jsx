import React from 'react'
import { withRouter } from 'react-router-dom'
import './article.css'

class Contest extends React.Component {

    render() {
        return (
            <>
                <div className='art-header header-module'></div>
                <div className='art-title'><p>モジュール</p></div>
                <div className='art-data'>
                    <p>
                        本年度も例年通りモジュールレイアウト路線2線での展示です。部員が各自の世界観で作った世界を是非お楽しみください。また鉄道模型コンテスト2018にて、展示したモジュールも展示します。モジュールコンテストも同時開催致しますので是非ご参加ください。
                    </p>
                    <div onClick={this.handleToContest} className='link-button'>モジュールコンテストに投票する→</div>
                </div>
            </>
        )
    }
}

export default withRouter(Contest)