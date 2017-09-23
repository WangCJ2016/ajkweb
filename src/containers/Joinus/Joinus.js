import React, { PropTypes } from 'react';
import {MenuItem} from 'antd';
import MediaQuery from 'react-responsive';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SectionTitle from '../../components/sectionTitle/sectionTitle'
import './Joinus.scss'

class Join extends React.Component {
  itemRender(){
    const items = [{img:'gz',figcaption:'智能化改造',hash:'#gz'},{img:'yd',figcaption:'酒店预订',hash:''},{img:'tg',figcaption:'营运推广',hash:'#tg'},{img:'ht',figcaption:'后台管理',hash:'#gl'}]
    return items.map((item,index)=>{
    return [
    <a href={item.hash}><figure>
        <div className="img">
          <img src={require(`../../assets/imgs/${item.img}.png`)} alt={item.figcaption}/>
        </div>
        <figcaption>{item.figcaption}</figcaption>
      </figure></a>,' ']
    })
  }
  componentDidMount() {
     document.title = '合作优势-爱居客智慧酒店综合服务管理平台'
  }
  render () {
    const items = [1,2,3,4]
    return(
      <div>
        <Header current='join' />
        <section className="join_topimg">
          <h5>加入我们</h5>
        </section>
        <section className="join_advantage">
          <SectionTitle title='我们的优势' intr='一站式酒店服务'/>
          <div className="items clearfix">
            {this.itemRender()}
          </div>
        </section>
        <section className="join_reform" id='gz'>
          <SectionTitle title='智能化改造' intr='专业的团队进行改造，花费时间较少，打造更好的只能生活空间！'/>
          <div className="items clearfix">
            <div className="item">
              <div className='img'>
                <img src={require('../../assets/imgs/yingjian.png')} alt="硬件服务"/>
              </div>
              <h5>软硬装设计服务</h5>
              <p>从选址、装修到开业、运营、营销实现全程服务，提高效率与收益</p>
            </div>
            <div className="item">
              <div className='img'>
                <img src={require('../../assets/imgs/yunying.png')} alt=""/>
              </div>
              <h5>酒店正常运营</h5>
              <p>安装快速，简便。设备WiFi连接无需布线</p>
            </div>
            <div className="item">
              <div className='img'>
                <img src={require('../../assets/imgs/jiance.png')} alt=""/>
              </div>
              <h5>智能检测 安全节能</h5>
              <p>电流电压感应，检测所有电器电流。无人自动</p>
            </div>
          </div>
        </section>
        <section className="join_spread" id='tg'>
          <SectionTitle title='平台运营推广' intr='整合互联网传播资源，在微信公众号与朋友圈、各大相关平台进行联合营销推广，打造强势品牌'/>
          <div className="content clearfix">
            <MediaQuery minWidth={750}>
            <div className="left">
              <h5>各大平台合作推广</h5>
              <p>引流同程网、携程网、驴妈妈网、阿里旅行等各大平台，增加会员流量、会员管理。酒店优惠
              、活动信息第一时间传播到用户，与酒店粉丝互动，粉丝转发</p>
            </div>
            <div className="right">
              <img src={require('../../assets/imgs/tuiguang.png')} alt=""/>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={749}>
            <div className="left">
              <img src={require('../../assets/imgs/tuiguang.png')} alt=""/>
            </div>
            <div className="right">
              <h5>各大平台合作推广</h5>
              <p>引流同程网、携程网、驴妈妈网、阿里旅行等各大平台，增加会员流量、会员管理。酒店优惠
              、活动信息第一时间传播到用户，与酒店粉丝互动，粉丝转发</p>
            </div>
            </MediaQuery>
          </div>
        </section>
        <section className="join_cehua">
          <p><span>活动策划</span>在公众号中设置活动营销，提升粉丝的参与感和活跃度，还可以通过优惠券、几分、增加粉丝粘，提升入住率。</p>
          <div className="items">
            <figure>
              <div className="img">
                <img src={require('../../assets/imgs/huodong.png')} alt=""/>
              </div>
              <figcaption>酒店优惠信息推送</figcaption>
            </figure>
            <figure>
              <div className="img">
                <img src={require('../../assets/imgs/youhuiquan-.png')} alt=""/>
              </div>
              <figcaption>酒店大型节日优惠互动</figcaption>
            </figure>
            <figure>
              <div className="img">
                <img src={require('../../assets/imgs/fensi.png')} alt=""/>
              </div>
              <figcaption>粉丝互动</figcaption>
            </figure>
            <figure>
              <div className="img">
                <img src={require('../../assets/imgs/yunshejiao.png')} alt=""/>
              </div>
              <figcaption>创建云社交平台</figcaption>
            </figure>
          </div>
        </section>
        <section className="join_control" id='gl'>
          <SectionTitle title='酒店后台管理' intr='酒店可以通过爱居客提供的酒店系统后台，提供酒店内部管理效率和管理水平。通过分析大数据，进一步制定更完美的音效侧率'/>
          <div className="content clearfix">
          <MediaQuery minWidth={750}>
            <div className="left">
               <div className="item clearfix">
                <div className="img">
                  <img src={require('../../assets/imgs/fjgl.png')} alt=""/>
                </div>
                <div>
                  <h5>房间管理</h5>
                  <p>管理酒店的房间，了解房间入住信息</p>
                </div>
               </div>
               <div className="item clearfix">
                <div className="img">
                  <img src={require('../../assets/imgs/kefang.png')} alt=""/>
                </div>
                <div>
                  <h5>房间管理</h5>
                  <p>管理酒店的房间，了解房间入住信息</p>
                </div>
               </div>
               <div className="item clearfix">
                <div className="img">
                  <img src={require('../../assets/imgs/sheshi.png')} alt=""/>
                </div>
                <div>
                  <h5>房间管理</h5>
                  <p>管理酒店的房间，了解房间入住信息</p>
                </div>
               </div>
               <div className="item clearfix">
                <div className="img">
                  <img src={require('../../assets/imgs/ziji.png')} alt=""/>
                </div>
                <div>
                  <h5>房间管理</h5>
                  <p>管理酒店的房间，了解房间入住信息</p>
                </div>
               </div>
            </div>
            <div className="right">
              <img src={require('../../assets/imgs/houtai.png')} alt=""/>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={749}>
            <div className="right">
              <img src={require('../../assets/imgs/houtai.png')} alt=""/>
            </div>
            <div className="left">
               <div className="item clearfix">
                <div className="img">
                  <img src={require('../../assets/imgs/fjgl.png')} alt=""/>
                </div>
                <div>
                  <h5>房间管理</h5>
                  <p>管理酒店的房间，了解房间入住信息</p>
                </div>
               </div>
               <div className="item clearfix">
                <div className="img">
                  <img src={require('../../assets/imgs/kefang.png')} alt=""/>
                </div>
                <div>
                  <h5>房间管理</h5>
                  <p>管理酒店的房间，了解房间入住信息</p>
                </div>
               </div>
               <div className="item clearfix">
                <div className="img">
                  <img src={require('../../assets/imgs/sheshi.png')} alt=""/>
                </div>
                <div>
                  <h5>房间管理</h5>
                  <p>管理酒店的房间，了解房间入住信息</p>
                </div>
               </div>
               <div className="item clearfix">
                <div className="img">
                  <img src={require('../../assets/imgs/ziji.png')} alt=""/>
                </div>
                <div>
                  <h5>房间管理</h5>
                  <p>管理酒店的房间，了解房间入住信息</p>
                </div>
               </div>
            </div>
          </MediaQuery>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Join;
