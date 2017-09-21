import React, { PropTypes } from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import classname from 'classname';
import {Carousel,Row,Col} from 'antd';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router';
import SectionTitle from '../../components/sectionTitle/sectionTitle.js'
import './Main.scss';
import config from '../../assets/common/confing.js'
import request from '../../assets/common/request.js'

class MainContainer extends React.Component {
  constructor(){
    super();
    this.state={
      ajk_chara_active:0,
      ajk_intr_active:0,
      dynamicItems:[],
      dynamicItemsIndex:0
    }
  }
  componentDidMount() {
    // 修改 keywords description
    request.get(config.api.base + config.api.queryKeyword)
      .then(res => {
        //console.log(res)
        if (res && res.success) {
          const keywords = res.dataObject[0].keyword
          const decription = res.dataObject[0].description
          const title = res.dataObject[0].title
          document.getElementById('keywords').content = keywords
          document.getElementById('decription').content = decription
          document.title = title
        }
      })
    request.get(config.api.base + config.api.queryDynamicsPage,{pageNo:1,pageSize:5})
    .then(res=>{
     // console.log(res)
      if(res.success&&res.result){
        this.setState({
          dynamicItems:res.result
        })
      }
    })
  }
  getTabNav(){
    const items = ['订房与入住','酒店服务','智能控制']
    return items.map((item,index)=>{
      const style = classname({
        icon:true,
        ['icon'+index]:true,
      })
      const styleLi=classname({
        active:index===this.state.ajk_chara_active
      })
     return <li key={index} className={styleLi} onClick={this.tabActive.bind(this,index)}><i className={style}></i>{item}</li>
    })
  }
  tabActive(key){
    this.setState({
      ajk_chara_active:key
    })
  }
  ajkIntrActive(key){
    this.setState({
      ajk_intr_active:key
    })
  }
  ajkIntrRender(){
    const items=[['gaoz','智能改造','reform'],['anli','成功案例','instance'],['join','合作优势','joinus']]
    return items.map((item,index)=>{
    return (<Link to={item[2]} key={index} ><figure onClick={this.ajkIntrActive.bind(this,index)}>
             <img src={require("../../assets/imgs/"+item[0]+".png")} alt=""/>
             <figcaption><p>{item[1]}</p><p>>></p></figcaption>
            </figure></Link>)

    })
  }
  dynamicsMouseEnter(index){
    this.setState({
      dynamicItemsIndex:index
    })
  }
  render () {
    const ajk_chara_item=classname({
      ajk_chara_item:true,
      show:0===this.state.ajk_chara_active||1===this.state.ajk_chara_active
    })
    const ajk_chara_item1=classname({
      ajk_chara_item1:true,
      show:0===this.state.ajk_chara_active
    })
    const ajk_chara_item2=classname({
      ajk_chara_item2:true,
      show:1===this.state.ajk_chara_active
    })
    const ajk_chara_item3=classname({
      ajk_chara_item3:true,
      show:2===this.state.ajk_chara_active
    })
    return(
      <div>
          <Header current='shouye'/>
          <Carousel className='Carousel_img' effect='fade'  >
              <div>
                <div className="carousel1">
                  <div className='clearfix'>
                    <img src={require('../../assets/imgs/gongneng.png')} alt="爱居客功能图"/>
                    <MediaQuery minWidth={480}>
                    <div className="intr">
                      <h5>一站式智慧酒店系统</h5>
                      <p>创新型智慧酒店综合服务管理平台,包括酒店客户下单、入住、酒店设备只能化交互、酒店客房服务</p>
                    </div>
                    </MediaQuery>
                  </div>
                </div>
              </div>
              <div>
                <div className="carousel">
                    <div>
                      <h4>拥有&nbsp;即是此刻</h4>
                      <p>爱居客，我们坚持智能家居生活方式为您提供宾至如归的诚意住所</p>
                    </div>
                </div>
              </div>
          </Carousel>
          <section className='ajk_intr'>
            <SectionTitle title='爱居客智能系统平台' intr='爱居客智能酒店管理系统是创新型智慧酒店综合服务管理平台。提供酒店客户下单、入住、酒店设备智能化交互、酒店客房服务等。拥有更舒适、更时尚，更便捷和科技感的入住体验。'/>
          </section>
          <section className="ajk_chara">
            <div className="tabContent">
              <div className={ajk_chara_item}>
                <div className={ajk_chara_item1}>
                  <img src={require('../../assets/imgs/hotel.png')} alt="爱居客酒店"/>
                  <img src={require("../../assets/imgs/appfir.png")} alt="爱居客APP"/>
                </div>
                <div className={ajk_chara_item2}>
                  <img src={require('../../assets/imgs/gouwuche.png')} alt=""/>
                  <img src={require("../../assets/imgs/zhoubian-.png")} alt=""/>
                    <img src={require('../../assets/imgs/fuwu-.png')} alt=""/>
                    <img src={require("../../assets/imgs/tiyan.png")} alt=""/>
                </div>
              </div>
              <div className={ajk_chara_item3}>
              </div>
            </div>
            <ul className='tabNav'>
              {this.getTabNav()}
            </ul>
          </section>
          <section className="ajk_chara_button">
            <Link to='experience' className='button'>查看更多</Link>
          </section>
          <section className="ajk_life_experience">
            <SectionTitle title='爱居客智能酒店平台优势' intr='分享生活理念，传达人生态度。追求品质，热爱生活。
科技与人文的相辅相成，从零开始，向舒适生活靠近，赋予酒店背后的多重内涵。爱居客与您一同分享，共同成长。'/>
            <div className='items'>
              {this.ajkIntrRender()}
            </div>
          </section>
          <section className="ajk_dynamic">
            <div className="content clearfix">
                <div  className='dynamic'>
                  <h3>爱居客动态&nbsp;&nbsp;<Link to='dynamics'>更多>></Link></h3>
                  <div className="diver"></div>
                  <ul>
                    {
                      this.state.dynamicItems.length>0?this.state.dynamicItems.map((item,index)=>(
                        <li key={item.id} onMouseEnter={this.dynamicsMouseEnter.bind(this,index)}><Link to={`dynamics/hotel/${item.id}`}><span>.</span>{item.title}</Link></li>
                      )):null
                    }
                  </ul>
                </div>
                <div className='imgs'>
                {this.state.dynamicItems.length>0?
                  <img src={this.state.dynamicItems[this.state.dynamicItemsIndex].picture} alt=""/>:null}              
                </div>
            </div>
          </section>
          <Footer />
      </div>
    )
  }
}

export default MainContainer;
