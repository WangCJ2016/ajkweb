import React, { PropTypes } from 'react'
import Diver from '../../../components/diver/diver'
import './ReformProduct.scss';
import config from '../../../assets/common/confing.js'
import request from '../../../assets/common/request.js'
class ReformProduct extends React.Component {
  constructor(){
    super();
    this.state={
      productDetail:{}
    }
  }
  componentDidMount(){
    request.get(config.api.base + config.api.viewProductDetail,{id:this.props.params.id})
    .then(res=>{
      this.setState({
        productDetail:res.dataObject
      })
      this.refs.content.innerHTML = res.dataObject.content
      document.title = res.dataObject.title+'-爱居客智慧酒店综合服务管理平台'
    })
    .catch(err=>{
    })
  }
  render () {
    const pro = this.state.productDetail
    console.log(pro)
    return (
      <section className="reformProduct">
        <h5>{pro.title}</h5>
        <Diver width='80px' height='3px'/>
        <div className="img">
          <img src={pro.picture} alt={pro.title}/>
        </div>
        <p className='content' ref='content'></p>
      </section>
    )
  }
}

export default ReformProduct;
