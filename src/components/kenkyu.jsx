import React from 'react'
import { withRouter } from 'react-router-dom'
import './article.css'

class Kenkyu extends React.Component {

    render() {
        return (
            <>
                <div className='art-header header-kenkyu'></div>
                <div className='art-title'><p>研究発表</p></div>
                <div className='art-data'>
                    <p>
                        今年度からの新企画として、部員たちの研究を紙だけでなく「生」で聴いて頂きたい！という考えのもと、小冊子に掲載されている研究の一部を1時間に1回、2教室目で発表を行います。また小学校中学年以下を対象として、子供向けのやさしめの発表についても実施予定です。新企画「鉄研発表2019」ぜひご期待ください！
                    </p>
                    {/* <div className='time-table'>
                        <p>現在発表中の研究</p>
                    </div> */}
                </div>
            </>
        )
    }
}

export default withRouter(Kenkyu)