import React from 'react';
import axios from 'axios';
import Videoplaylistfilter from '../VideoPlayListFilter/Videoplaylistfilter';
import Videomain from '../VideoMain/Videomain';

class Videoplaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoPlaylist: [],
            page: 'allVideos',
            video: []
        }
    }

    getData(data) {
        this.setState({
            page: data
        })
    }

    handleClick(data) {
        this.setState({
            page: 'mainVideo',
            video: data,
            videoPlaylist: data
        })
    }

    viewAllVideos(data) {
        this.setState({
            page: data
        })
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
            <div>

                {page === 'allVideos' && (
                    <Videoplaylistfilter videoPlaylist={videoPlaylist} sendData={e => this.handleClick(e)} />
                )}

                {page === 'mainVideo' && (
                    <Videomain video={this.state.video} page={this.state.page} allVideos={e => this.viewAllVideos(e)} />
                )}
            </div>
        );
    }
}

export default Videoplaylist;


