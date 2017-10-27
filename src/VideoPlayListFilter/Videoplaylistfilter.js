import React from 'react';
import text from "../text";
import './Videoplaylistfilter.css';

class Videoplaylistfilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'mainVideo'
        }
    }

    handleClick(data) {
        this.props.sendData(data)
    }

    render() {
        return (
            <div className="container-fluid">
                <h2>{text.headerMain}</h2>
                {this.props.videoPlaylist.map((data, i) => {
                    return (
                        <div key={i} className="row block-wrapper" onClick={e => this.handleClick(data)}>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <a href="#" onClick={e => this.handleClick()}>
                                    <img className="image-thumb" src={data.snippet.thumbnails.medium.url} />
                                </a>
                            </div>
                            <div className="col-md-6 col-md-6 col-lg-6">
                                <h3><a href="#" onClick={e => this.handleClick()}>{data.snippet.title}</a></h3>
                                <h5>{text.publishedHeader} {Date(data.snippet.publishedAt)}</h5>
                                <p className="text-wrapper">{data.snippet.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Videoplaylistfilter;


