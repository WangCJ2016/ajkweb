import React from 'react'
import request from '../../assets/common/request.js'
import config from '../../assets/common/confing.js'
import Diver from '../diver/diver.js'
class LoopList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:this.props.children
    }
  }
  componentDidMount() {
    this.refs.ul.style.top='0px'
    console.log(this.refs.ul.children);
    //this.refs.ul.children.style.height='50px'
    let item_count = 0;
    this.timer = setInterval(()=>{
        const currentTop = this.refs.ul.style.top.slice(0,-2) - 0
      if(item_count ++ >= 50){
        item_count=0
        const firstItem = this.state.items[0];
        const newItems = []
        const oldItems = this.state.items
         oldItems.splice(0,1)
         oldItems.push(firstItem)
         this.refs.ul.style.top='0px'
         this.setState(oldItems)
      }else{
      this.refs.ul.style.top=(currentTop-1)+'px';
      }
    },50)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  getItemPanes(){
    const itemsElement = this.state.items
    return React.Children.map(itemsElement,(child)=>{
      if(!child){return;}
      return React.cloneElement(child,{
        children:child.props.children
      })
    })

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      items:nextProps.children
    })
  }

	render(){
		return(
         <div className="overWrap">
          <div className='ul' ref='ul'>
            {
              this.getItemPanes()
            }
          </div>
          </div>
			)
	}
}
export default LoopList
