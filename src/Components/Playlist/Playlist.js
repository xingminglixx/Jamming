import React from 'react'; 
import './playlist.css'
import {Tracklist} from '../Tracklist/Tracklist'
export class Playlist extends React.Component {


render(){
return(
<div className="Playlist">
  <input value="New Playlist"/> 
  <Tracklist  tracks={this.props.TrackList} onRemove={this.props.onRemove} isRemoval={false} />
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>

)


}





}