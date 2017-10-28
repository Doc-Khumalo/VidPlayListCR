import React from 'react';
import axios from 'axios';
import text from "../text";
import './Videoplaylist.css';

class Videoplaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoPlaylist: [],
            video: []
        }
    }

    handleClick(data) {
        this.props.sendData(data)
    }

    componentDidMount() {
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
            .then(response => {

                // filter through the object for "available" videos to avoid breaking the map function
                const filteredContent = response.data.items.filter(item => (item.snippet.description !== "This video is unavailable."));

                this.setState({
                    videoPlaylist: filteredContent,
                    video: []
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { videoPlaylist, page } = this.state;

        return (
            <div className="container-fluid">
                <h2>{text.headerMain}</h2>
                {videoPlaylist.map((data, i) => {
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

export default Videoplaylist;


