import React from 'react'
import { withRouter } from 'react-router-dom'
import { Document, Page } from 'react-pdf'
import './article.css'
class BookletViwer extends React.Component {

    handletoBookletPdf = () => {
        this.props.history.push('/booklet-viwer')
    }

    render() {
        return (
            <>
                <Document
                    file="/97booklet.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={1} width={600} />
                </Document>
            </>
        )
    }
}

export default withRouter(BookletViwer)