import React from 'react'
import { withRouter } from 'react-router-dom'
import './article.css'
import Module1 from '../images/module-1.jpg'
import Module2 from '../images/module-2.jpg'
import Module3 from '../images/module-3.jpg'
import Module4 from '../images/module-4.jpg'
import Module5 from '../images/module-5.jpg'
import Module6 from '../images/module-6.jpg'
import Module7 from '../images/module-7.jpg'
import Module8 from '../images/module-8.jpg'
import Module9 from '../images/module-9.jpg'
import Module10 from '../images/module-10.jpg'
import Module11 from '../images/module-11.jpg'

class Contest extends React.Component {

    VoteTo1 = () => {
        fetch('https://634tekken.tk/kinensai/module/1')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo2 = () => {
        fetch('https://634tekken.tk/kinensai/module/2')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo3 = () => {
        fetch('https://634tekken.tk/kinensai/module/3')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo4 = () => {
        fetch('https://634tekken.tk/kinensai/module/4')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo5 = () => {
        fetch('https://634tekken.tk/kinensai/module/5')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo6 = () => {
        fetch('https://634tekken.tk/kinensai/module/6')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo7 = () => {
        fetch('https://634tekken.tk/kinensai/module/7')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo8 = () => {
        fetch('https://634tekken.tk/kinensai/module/8')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo9 = () => {
        fetch('https://634tekken.tk/kinensai/module/9')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo10 = () => {
        fetch('https://634tekken.tk/kinensai/module/10')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    VoteTo11 = () => {
        fetch('https://634tekken.tk/kinensai/module/11')
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
            });
        this.props.history.push('/vote-confirm')
    }

    render() {
        return (
            <>
                <div className='art-header header-moduleContest'></div>
                <div className='art-title'><p>モジュールコンテスト</p></div>
                <div className='art-data'>
                    <div className='module-list'>
                        <div className='module-title'>No.1 守株</div>
                        <div className='module-setumei'>
                            宋人に田を耕す者有り。
                            田中に株有り。兔走りて株に触れ、頸を折りて死す。
                            因りて其の耒を釈てて株を守り、復た兔を得んことを冀ふ。
                            兔復た得べからずして、身は宋国の笑ひと為れり。
                        </div>
                        <img alt='module1' src={Module1} />
                        <div onClick={this.VoteTo1} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.2 未完成</div>
                        <div className='module-setumei'>
                            完成しませんでした(土下座)
                        </div>
                        <img alt='module1' src={Module2} />
                        <div onClick={this.VoteTo2} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.3 山麓の風景</div>
                        <div className='module-setumei'>
                            線路のそばに立つ山と、その周りに立つ木などの自然で、山麓の風景を表しました
                        </div>
                        <img alt='module1' src={Module3} />
                        <div onClick={this.VoteTo3} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.4</div>
                        <div className='module-setumei'>

                        </div>
                        <img alt='module1' src={Module4} />
                        <div onClick={this.VoteTo4} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.5 </div>
                        <div className='module-setumei'>

                        </div>
                        <img alt='module1' src={Module5} />
                        <div onClick={this.VoteTo5} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.6 都会と田舎の町</div>
                        <div className='module-setumei'>
                            線路の外側が住宅地、線路の内側には田んぼがありますが、道を挟んでビルがあるなど、都会と田舎が錯綜した町です。
                        </div>
                        <img alt='module1' src={Module6} />
                        <div onClick={this.VoteTo6} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.7 割掘</div>
                        <div className='module-setumei'>
                            鉄道の高低差のある場所でよく見られる風景を再現
                        </div>
                        <img alt='module1' src={Module7} />
                        <div onClick={this.VoteTo7} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.8 廃村</div>
                        <div className='module-setumei'>
                            寂れた地方です。
                            もう廃墟と化している村、廃線、ただ青々と生い茂る稲があります
                        </div>
                        <img alt='module1' src={Module8} />
                        <div onClick={this.VoteTo8} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.9 歴史あるまちと駅</div>
                        <div className='module-setumei'>
                            長い時を経て発展してきたまちをイメージして作りました。駅の雰囲気にもこだわりました。模型から歴史を感じ取れるかな…？
                        </div>
                        <img alt='module1' src={Module9} />
                        <div onClick={this.VoteTo9} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.10 路面電車が走る街いまむかし</div>
                        <div className='module-setumei'>
                            昭和、平成、そして令和と、時代を超えて走る路面電車。川を隔てて時の流れを表現しました
                        </div>
                        <img alt='module1' src={Module10} />
                        <div onClick={this.VoteTo10} className='link-button'>このモジュールに投票→</div>
                    </div>

                    <div className='module-list'>
                        <div className='module-title'>No.11 海岸線</div>
                        <div className='module-setumei'>
                            日本のどこかと言われれば正直分からないけど、こんなところありそうだなあと。
                        </div>
                        <img alt='module1' src={Module11} />
                        <div onClick={this.VoteTo11} className='link-button'>このモジュールに投票→</div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Contest)