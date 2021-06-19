import React from 'react';
import './Track.css';


export class Track extends React.Component {
constructor(props) {
super(props)
this.addTrack=this.addTrack.bind(this)

}

renderAction(){
if (this.props.isRemoval) {
return <button className='Track-action'>-</button>
}else{

return <button className='Track-action'>+</button>

}}



addTrack(){
this.props.onAdd(this.props.track)

}




render() {
    return (
        <div class="Track">
  <div className="Track-information">
    <h3>{this.props.name}</h3>
    <p>{this.props.artist} | {this.props.album}</p>
  </div>
  <button className="Track-action" onClick={this.addTrack}>+</button>
</div>


    )
}


}