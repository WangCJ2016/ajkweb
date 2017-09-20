import React, {PropTypes} from 'react'
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Diver from '../../components/diver/diver.js';
import ExperienceModels from './models/models.js'
import Video from '../../components/video/video.js'
import SectionTitle from '../../components/sectionTitle/sectionTitle.js'
import {Row, Col} from 'antd';
import {Link} from 'react-router';
import classname from 'classname'
import './Experience.scss';

import MediaQuery from 'react-responsive';

class Experience extends React.Component {
  constructor(){
    super();
    this.state = {
      imgIn:false
    }
    this.scroll = this.scroll.bind(this)
  }
  scroll(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var cHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    const share = this.refs.share;
    if(scrollTop>(share.offsetTop-cHeight/2)){
      this.setState({
        imgIn:true,
        rew:false
      })
    }
  }
  componentDidMount() {
     window.addEventListener('scroll', this.scroll)
     document.title = '智慧平台体验-爱居客智慧酒店综合服务管理平台'
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.scroll)
  }
  render() {
    const gridClass = classname({
      grid1:true,
      imgIn:this.state.imgIn
    })
    return (
      <div>
        <Header current='experience'/>
        <section className="experience_top_img">
          <p className="title">智慧酒店服务</p>
          <section>
            <figure>
             <a href="#video"  name="video">
              <img src={require('../../assets/imgs/video.png')} alt="观看视频"/>
              <figcaption>观看视频</figcaption>
              </a>
            </figure>
            <figure>
              <a href="#inhotel">
              <img src={require('../../assets/imgs/book_480.png')} alt="订房与入住"/>
              <figcaption>订房与入住</figcaption>
              </a>
            </figure>
            <figure>
              <a href="#exp">
              <img src={require('../../assets/imgs/exp_480.png')} alt="智能体验"/>
              <figcaption>智能体验</figcaption>
              </a>
            </figure>
            <figure>
              <a href="#ser">
              <img src={require('../../assets/imgs/serv_480.png')} alt="智慧服务"/>
              <figcaption>智慧服务</figcaption>
              </a>
            </figure>
          </section>
        </section>
        <section  name="video" className="experience_video">
          <Video  source='/static/media/ajk.mp4' poster='/static/media/poster.jpg'/>
        </section>

        <section id='inhotel' className="experience_reserve">
          <SectionTitle title='一键预定房间' intr='完整的酒店订房、入住系统，更便捷的订房、入住、体验系统，各种风格酒店
        可供挑选'/>
          <div className='imgs clearfix'>
            <img src={require('../../assets/imgs/appfirst.png')} alt="爱居客APP"/>
            <img src={require('../../assets/imgs/hoteld.png')} alt="爱居客订房"/>
          </div>
        </section>
        <section id='exp' className="experience_inHotel">
          <div className='content'>
            <div className='left'>
              <img src={require('../../assets/imgs/suo.png')} alt="爱居客酒店入住"/>
              <h5>酒店入住</h5>
              <p>在APP上订房成功后,到达入住放假后，可直接在APP上操作，进入房间</p>
            </div>
            <div className='right'>
              <img src={require("../../assets/imgs/lock.png")} alt=""/>
            </div>
          </div>
        </section>
        <section className="experience_share" onScroll={this.scroll.bind(this)} ref='share'>
          <SectionTitle title='随心所欲 享受智能化生活' intr='灯光、电视、空调、窗帘、门锁等智能控制，更多智能模式的选择'/>
            <div className="xianyuan">
                <div className='grid'></div>
              <div className={gridClass}>
                <figure>
                  <img src={require('../../assets/imgs/kongtiao.png')} />
                  <figcaption>空调控制</figcaption>
                </figure>
                <figure>
                  <img src={require('../../assets/imgs/deng.png')}/>
                  <figcaption>灯光控制</figcaption>
                </figure>
                <figure>
                  <img src={require('../../assets/imgs/keys.png')}/>
                  <figcaption>门锁控制</figcaption>
                </figure>
                <figure>
                  <img src={require('../../assets/imgs/chuanglian.png')}/>
                  <figcaption>窗帘控制</figcaption>
                </figure>
                <figure>
                  <img src={require('../../assets/imgs/tv.png')}/>
                  <figcaption>电视</figcaption>
                </figure>
              </div>
              <img className='hand' src={require('../../assets/imgs/750/shouchi.png')} alt=""/>
            </div>

        </section>
        <ExperienceModels/>
        <section className="experience_service">
          <h5>安全实时掌握</h5>
          <p>门锁检测+去电检测+人体感应检测</p>
          <p>电流电压感应，检测所有电器，实时掌握最真实的房态</p>
        </section>
        <section id='ser' className="experience_share">
          <SectionTitle title='便捷的酒店服务' intr='提供优质的酒店服务平台、出行、又玩、满足住宿者的需求，提高住宿品质'/>
          <MediaQuery minWidth={900}>
            <div className='img_service'>
              <img src={require('../../assets/imgs/serv.png')} alt="爱居客服务"/>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={899}>
            <div style={{
              textAlign: 'center'
            }}>
              <div>
                <section className='experience_intr_medium clearfix'>
                  <div className='figure left'>
                    <div className='imgs'>
                      <img src={require('../../assets/imgs/750/gouw_750.png')} alt=""/>
                    </div>
                    <div className='intr left'>
                      <h5>酒店场景式电商</h5>
                      <p>日用品、零食等直接手机购买，简单方便</p>
                    </div>
                  </div>
                  <div className="right left">
                    <img src={require('../../assets/imgs/750/dians.png')} alt=""/>
                  </div>
                </section>
              </div>
              <div>
                <section className='experience_intr_medium clearfix'>
                  <div className='figure left'>
                    <div className='imgs'>
                      <img src={require('../../assets/imgs/750/zhoub_750.png')} alt=""/>
                    </div>
                    <div className='intr left'>
                      <h5>周边配套</h5>
                      <p>提供游玩、餐饮服务、休闲、KTV娱乐特产信息</p>
                    </div>
                  </div>
                  <div className="right left">
                    <img src={require('../../assets/imgs/750/fuw1.png')} alt=""/>
                  </div>
                </section>
              </div>
              <div>
                <section className='experience_intr_medium clearfix'>
                  <div className="right left">
                    <img src={require('../../assets/imgs/750/fuw1.png')} alt=""/>
                  </div>
                  <div className='figure left'>
                    <div className='imgs'>
                      <img src={require('../../assets/imgs/750/zhoub_750.png')} alt=""/>
                    </div>
                    <div className='intr' style={{
                      marginTop: '15px'
                    }}>
                      <h5>周边配套</h5>
                      <p>提供游玩、餐饮服务、休闲、KTV娱乐特产信息</p>
                    </div>
                  </div>
                </section>
              </div>
              <div>
                <section className='experience_intr_medium clearfix'>
                  <div className='figure left'>
                    <div className='imgs'>
                      <img src={require('../../assets/imgs/750/gouw_750.png')} alt=""/>
                    </div>
                    <div className='intr left'>
                      <h5>体验式购物</h5>
                      <p>用户先体验，在购买</p>
                    </div>
                  </div>
                  <div className="right left">
                    <img src={require('../../assets/imgs/750/dians.png')} alt=""/>
                  </div>
                </section>
              </div>
            </div>
          </MediaQuery>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Experience;
