import React from 'react'
import { withRouter } from 'react-router-dom'
import './article.css'
import Daibo1 from '../images/daibo1.jpg'
import Daibo2 from '../images/daibo1.jpg'

class Bigboard extends React.Component {

    render() {
        return (
            <>
                <div className='art-header header-bigboard'></div>
                <div className='art-title'><p>大ボード</p></div>
                <div className='art-data'>
                    <p>
                        大ボードは7枚の大きな板からなるNゲージのジオラマです。モジュールとは違い街の規模が大きく全体として繫がりがあるので1つの街として俯瞰するといった楽しみ方ができるのも特徴です。
                        今年の線路は在来線の複々線の4線と高架線複線の2線の他にボード全体を外周し山の周りや海岸沿いの街も走る山線(仮称)の全7線です。山線は単線ですがtomixのTCS自動運転装置を使用し駅での交換を行い1線に2列車を走らせます。
                        <img alt='1' src={Daibo1} />
                        また複々線と高架線では毎年行っている体験運転を今年も実施する予定です。体験運転について例年は既製品のコントローラーを使用していますが今年は部員の自作した遠隔操作システム(詳しくは当日、研究発表や小冊子をご覧ください)を使用して備え付けのタブレット端末から操作を行えます。遠隔操作システムは既製品と比べより実車に近い挙動を再現していたりとこだわりが多くみられますので是非当日足を運んで体感してみてください。(やむを得ないシステムの不調、故障などで既製品を使用する場合があります)
                        <img alt='2' src={Daibo2} />
                        またジオラマは部員が丹精を込めて作成したものです。残念ながら粗はあると思いますがこだわりの箇所が各所にあるので立った状態で俯瞰するだけでなく引く視線で目を凝らして街を観察してみると同じ所でも違う姿が見えてくるかもしれません。

                    </p>
                </div>
            </>
        )
    }
}

export default withRouter(Bigboard)