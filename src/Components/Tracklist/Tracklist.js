import React from 'react';
import './Tracklist.css'
import {Track} from '../Track/Track'
export class Tracklist extends React.Component {

render() {
    return (
        <div className="TrackList">
            {this.props.tracks.map(track =>{ return <Track key={track.id}
            name={track.name} artist={track.artist} album={track.album}
            
            
            /> })}
             
         </div>
    )

}
}