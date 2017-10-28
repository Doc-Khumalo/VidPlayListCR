import React from 'react';
import Videoplaylist from '../VideoPlayList/Videoplaylist';
import Videomain from '../VideoMain/Videomain';

class Videocontainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'allVideos'
        }
    }

    receiveData(data) {
        this.setState({
            page: 'mainVideo',
            video: data,
            videoPlaylist: data
        })
    }

    allVideos(data) {
        this.setState({
            page: data
        })
    }

    render() {
        const { page, video } = this.state;
        
        return (
            <div>
                {page === 'allVideos' && (
                    <Videoplaylist page={page} sendData={e => this.receiveData(e)}/>
                )}

                {page === 'mainVideo' && (
                    <Videomain page={page} video={video} sendData={e => this.allVideos(e)}/>
                )}
            </div>
        )
    }
}

export default Videocontainer;
