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
        {name:'33', artist:'22',album:'11',id:'222'},
        {name:'44', artist:'33',album:'22',id:'333'},
        {name:'77', artist:'88',album:'99',id:'111'}


      ]




    }

    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this)
    this.savePlaylist=this.savePlaylist.bind(this)
    this.search=this.search.bind(this)
  }
addTrack(track){
  let newTrack=this.state.playlistTracks 
if (newTrack.find(savedTrack=>savedTrack.id===track.id)){
return  
}
newTrack.push(track)
this.setState(

  {playlistTracks:newTrack}
)}

removeTrack(track){
let removedTrack= this.state.playlistTracks
removedTrack=removedTrack.filter(item=>item.id!=track.id)
this.setState({playlistTracks:removedTrack})


}
updatePlaylistName(name){
this.setState({playlistName:name})

}

savePlaylist(){
  let trackURIs=this.state.playlistTracks.map(track=>track.uri)

}
search(term){
  console.log(term)
}





render(){
return(
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
  <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
   <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
    <Playlist onNameChange={this.updatePlaylistName} Playlist={this.state.playlistName} onRemove={this.removeTrack} TrackList={this.state.playlistTracks}
    onSave={this.savePlaylist}/>
    </div>
    </div>
  </div>
  



)
}





}

export default App;
