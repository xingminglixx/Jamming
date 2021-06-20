import React from 'react'; 
import './playlist.css'
import {Tracklist} from '../Tracklist/Tracklist'
export class Playlist extends React.Component {
constructor(props) {
super(props)
this.handleNameChange=this.handleNameChange.bind(this)
}

handleNameChange(e){
let val=e.target.value
this.props.onNameChange(val)

}



render(){
return(
<div className="Playlist">
  <input onChange={this.handleNameChange} defaultValue={'New playlist'}/> 
  <Tracklist  tracks={this.props.TrackList} onRemove={this.props.onRemove} isRemoval={false} />
  <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
</div>

)


}





}