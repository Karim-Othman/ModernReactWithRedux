import ReactDom from 'react-dom';
import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

const APIKey = 'AIzaSyCWOCK9aihsdjAcq5GUSkz-SaAY7DDD8KE';

// Create New Component
// this component Should produce HTML

class App extends Component
{


constructor(props)
{
    super(props);
    this.state = {
        videos : [],
        SelectedVideo: null
    };

    this.SearchTermChange('surfboards');

}

SearchTermChange (term)
{
    YTSearch({key:APIKey,   term:term}, (videos)=>{
        this.setState(
            
            {videos: videos,
            SelectedVideo: videos[0]}
        
        );
    });

}


    render ()
    {
            const videoSearch = _.debounce((term)=>{this.SearchTermChange(term)}, 300);
        return( 
                <div>
                    <SearchBar onSearchBarChange={videoSearch} />
                    <VideoDetail video={this.state.SelectedVideo} />
                    <VideoList
                     videos={this.state.videos}
                     OnVideoSelect= {(SelectedVideo) => this.setState({SelectedVideo})}/>
                </div>
            );
    }

}

// Take This component's generated HTML
// and put it on the Page (DOM)


ReactDom.render(<App />, document.querySelector('.container'));