import React, { PropTypes } from 'react'
import Diver from '../../../components/diver/diver'
import request from '../../../assets/common/request.js'
import config from '../../../assets/common/confing.js'
class InstanceItem extends React.Component {
  constructor(){
    super();
    this.state={
      proDetail:{}
    }
  }
  componentDidMount() {
    request.get(config.api.base + config.api.viewCaseDetail,{id:this.props.params.id})
    .then(res=>{
      this.setState({
        proDetail:res.dataObject
      })
      console.log(res.dataObject)
      document.title = res.dataObject.title + '-爱居客智慧酒店综合服务管理平台'
      this.refs.content.innerHTML = res.dataObject.content
    })
  }
  render () {
    const pro = this.state.proDetail
    return (
      <section className="reformProduct">
        <h5>{pro.title}</h5>
        <Diver width='80px' height='3px'/>
        <div className="img">
          <img src={pro.picture} alt={pro.title}/>
        </div>
        <p className='content' ref='content'>{pro.content}</p>
      </section>
    )
  }
}

export default InstanceItem;
