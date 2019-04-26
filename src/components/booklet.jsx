import React from 'react'
import { withRouter } from 'react-router-dom'
import './article.css'
class Booklet extends React.Component {

    handletoBookletPdf = () => {
        this.props.history.push('/booklet-viwer')
    }

    render() {
        return (
            <>
                <div className='art-header header-booklet'></div>
                <div className='art-title'><p>小冊子</p></div>
                <div className='art-data'>
                    <p>
                        今年の小冊子は一味も二味も違います！カラー表紙全88ページの小冊子「鉄研研究2019」は、部員たちが一年間かけて研究した論文を厳選して掲載しています。また今年は新企画を「鉄研発表」と題し、小冊子に掲載されている研究論文を来場者の皆さんの目の前で直接プレゼンする企画も予定していますので、これと併せてお楽しみに。鉄研発表に関しては後述のご案内をご覧ください。
                    </p>
                    <div onClick={this.handletoBookletPdf} className='link-button'>小冊子を読む→</div>
                </div>

            </>
        )
    }
}

export default withRouter(Booklet)