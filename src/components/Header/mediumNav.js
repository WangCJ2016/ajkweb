import React, { PropTypes } from 'react'
import classname from 'classname';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './mediumNav.scss';
class MediumNav extends React.Component {
  static defaultProps = {
    activeIndex: 0,
  };
  constructor(props){
    super(props);
    this.state={
      'activeIndex':this.props.activeIndex,
      itemsExpand:false,
      selectedKey:this.props.selectedKeys
   }
  }
  handleClick(index){
    this.setState({
      activeIndex:index
    })
  }
  itemRender(){
    return this.props.children.map((item,index)=>{
      const style = classname({
        'active':item.key==this.state.selectedKey
      })
      return <div key={index} className={style} onClick={this.handleClick.bind(this,index)}>{item}</div>
    })
  }
  render () {
    return(
      <div className="mediumNav">
        <img src={require('../../assets/imgs/750/daohang.png')} alt="" onClick={()=>{this.setState({itemsExpand:!this.state.itemsExpand})}}/>
        {
          this.state.itemsExpand?
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
               className='navItems' >
               {this.itemRender()}
            </ReactCSSTransitionGroup>
            :null
          }
      </div>

    )
  }
}
export default MediumNav;
