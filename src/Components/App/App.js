import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar'
import {SearchResults} from '../SearchResults/SearchResults'
import {Playlist} from '../Playlist/Playlist'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
          name: 'son',
          artist: null,
          album: null,
          id: null
        },
        {
          name: null,
          artist: null,
          album: null,
          id: null
        },
        {
          name: null,
          artist: null,
          album: null,
          id: null
        }
      ],
      playlistName:'any',
      playlistTracks:[
        {name:null, artist:null,album:null,id:null},
        {name:null, artist:null,album:null,id:null},
        {name:null, artist:null,album:null,id:null}


      ]




    }

    this.addTrack=this.addTrack.bind(this);
  }
addTrack(track){
  const newTrack=this.state.playlistTracks 
if (newTrack.find(savedTrack=>savedTrack.id===track.id)){
return  
}
newTrack.push(track)
this.setState(

  {playlistTracks:newTrack}
)}

removeTrack(track){
const removedTrack= this.state.playlistTracks
if (removedTrack.find(item=>{track.id===item.id})){


  
}



}


render(){
return(
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
  <SearchBar />
    <div className="App-playlist">
   <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
    <Playlist Playlist={this.state.playlistName} TrackList={this.state.playlistTracks}/>
    </div>
    </div>
  </div>
  



)
}





}

export default App;
