import React from 'react'
import { withRouter } from 'react-router-dom'
import './article.css'

class Booklet extends React.Component {

    render() {
        return (
            <>
                <div className='art-header header-quiz'></div>
                <div className='art-title'><p>クイズ</p></div>
                <div className='art-data'>
                    <p>
                    ご好評につき今年も鉄研クイズを開催します！
     <br />例年通り各駅停車（初級）、急行（中級）、特急（上級）の3部構成をご用意し皆さんの挑戦をお待ちしております。また各級一定以上の正解で景品をお渡しします。「ここまで難しいクイズは見たことがない…」などとコアな鉄道ファンすら唸らせる「特急（上級）、あなたは解けるかな…？
     <br />※毎回のご注意となりますが、クイズの答えをスマートフォンなどで調べるカンニング行為はご遠慮ください。
     <br />※今年は室内配置の関係上、鉄研発表の開催時間中（毎時0分から約20分）はクイズコーナーを閉鎖させて頂きます。ご了承ください。
    
                    </p>
                </div>
            </>
        )
    }
}

export default withRouter(Booklet)