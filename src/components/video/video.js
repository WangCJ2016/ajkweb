import React, { Component,PropTypes } from 'react'

class Video extends Component {
  constructor(){
    super()
    this.state = {
      pause:true
    }
  }
  play(){
    if (this.refs.video.paused){
           this.refs.video.play();
           this.setState({
             pause:false
           })
         }
       else{
           this.refs.video.pause();
           this.setState({
             pause:true
           })
         }
  }
 render(){
   return(
        <div style={{position:'relative'}}>
             <video poster={this.props.poster}  ref='video' onClick={this.play.bind(this)}>
             <source src={this.props.source} />
             </video>
             {
               this.state.pause?
               <img style={styles.pauseIcon} onClick={this.play.bind(this)} src={require('../../assets/imgs/pause.png')} alt=""/>
               :null
             }
           </div>
   )
 }
 }
const styles={
  pauseIcon:{
    width:'6%',
    position:'absolute',
    left:'47%',
    top:'47%',

  }
}

export default Video;
