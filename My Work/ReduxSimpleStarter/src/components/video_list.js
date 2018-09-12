import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props)=>{

    const VideosArray = props.videos.map((video)=>{
        return <VideoListItem key={video.etag} video={video} OnVideoSelect={props.OnVideoSelect}/>;
    });
return (

            <ul className = "col-md-4 list-group">
           { VideosArray }
            </ul>    

    );

};

export default VideoList;