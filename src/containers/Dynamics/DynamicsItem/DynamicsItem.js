import React, {PropTypes} from 'react'
import {Breadcrumb} from 'antd'
import './DynamicsItem.scss';
import Diver from '../../../components/diver/diver';
import MediaQuery from 'react-responsive';
import request from '../../../assets/common/request.js'
import config from '../../../assets/common/confing.js'
import LoopList from '../../../components/loopList/loopList'

class DynamicsItem extends React.Component {
  constructor(){
    super();
    this.state={
      item:{},
      items:[]
    }
  }
  componentDidMount(){
    document.title = '加入我们-爱居客'
    request.get(config.api.base + config.api.viewDynamicDetail,{id:this.props.params.id})
    .then(res=>{
      if(res.success&&res.dataObject){
        this.setState({
          item:res.dataObject
        })
        document.title = res.dataObject.title+'-爱居客智慧酒店综合服务管理平台'
      }
    })

    request.get(config.api.base + config.api.queryDynamicsPage,{pageNo:1,pageSize:10})
    .then(res=>{
      console.log(res)
      if(res.success&&res.result){
        this.setState({
          items:res.result
        })
      }
    })
  }
  render () {
    const item = this.state.item
    return(
      <div className='dynamics_hoteldetail clearfix'>
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="#/dynamics">公司动态</Breadcrumb.Item>
          <Breadcrumb.Item>{item.title}</Breadcrumb.Item>
        </Breadcrumb>
        <section className="hotel">
          <h5>{item.title}</h5>
          <p className='time'>发布时间：{item.gmtCreate}</p>
          <div className="img">
            <img src={item.picture} alt={item.title}/>
          </div>
          <p>{item.profile}</p>
        </section>
        <MediaQuery minWidth={750}>
          <section className="more">
            <div className="moreContent"><Diver width='4px' height='20px' /><span>更多内容</span></div>
              <LoopList>
                {
                  this.state.items.length>0?this.state.items.map((item,index)=>(
                    <div key={index}>{item.title}</div>
                  )):null
                }
              </LoopList>
            </section>
        </MediaQuery>
      </div>
    )
  }
}

export default DynamicsItem;
