import MediaQuery from 'react-responsive';
import React, {Component} from 'react';
import {Tabs,Icon} from 'antd'

import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import SectionTitle from '../../components/sectionTitle/sectionTitle'
import './Callus.scss'
import CallusFrom from './callusForm.js'
import classname from 'classname'

const TabPane = Tabs.TabPane;

class Callus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phoneNumber: '',
      content: '',
      email: '',
      active1: false,
      active2: false
    }
  }
  componentDidMount() {
    const map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 13,
      center: [120.065375, 30.292008]
    });
    var marker = new AMap.Marker({map: map, bubble: true})
    document.title = '联系我们-爱居客智慧酒店综合服务管理平台'
  }
  submit() {
    if (!this.state.name) {}
  }
  render() {
    const style1 = classname({active: this.state.active1})
    const style2 = classname({active: this.state.active2})
    return (
      <div>
        <Header current='callus'/>
        <section className="callus_topImg">
          <h5>联系我们</h5>
        </section>
        <section className="callus_address clearfix">
          <div className="left" id='container'></div>
          <div className="right">
            <ul>
              <li className='title'>浙江爱居客网络科技有限公司</li>
              <li>公司地址：杭州市西湖区花蒋璐468号久良科技6楼</li>
              <li>联系方式：0571-86680813</li>
              <li>邮箱：zj_aijuke@163.com</li>
            </ul>
          </div>
        </section>
        <section className="call_download">
          <SectionTitle title='酒店app下载' intr=''/>
          <div className="download clearfix">
            <div className="right">
                  <Tabs defaultActiveKey="1" >
                    <TabPane tab={<span><Icon type="android" />Android版</span>} key="1">
                      <div className='tab_left'>
                        <h4>android客户端</h4>
                        <p>爱居客APP1.0正式版&nbsp;更新日期：2017-7-18</p>
                        <ul>
                          <li>更新日志</li>
                          <li>【酒店预订】:APP专享价格，定住一致</li>
                          <li>【全新界面】:全新UI设计，清新简约，让您耳目一新。</li>
                          <li>【安全支付】:支付宝支付有保障</li>
                        </ul>
                      </div>
                      <div className="tab_right clearfix">
                        <div className="download_button"><Icon type="download" /><a href="http://17071855139.share.sj.360.cn/qcms/view/t/detail?sid=3869433&from=timelinehttp://17071855139.share.sj.360.cn/qcms/view/t/detail?sid=3869433&from=timelinehttp://17071855139.share.sj.360.cn/qcms/view/t/detail?sid=3869433&from=timeline">免费下载</a></div>
                        <img className='andriod_qr' src={require('../../assets/imgs/android_qr1.png')} alt="ios二维码"/>
                      </div>
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />IOS版</span>} key="2">
                      <div className='tab_left'>
                        <h4>ios客户端</h4>
                        <p>爱居客APP1.0正式版&nbsp;更新日期：2017-7-18</p>
                        <ul>
                          <li>更新日志</li>
                          <li>【酒店预订】:APP专享价格，定住一致</li>
                          <li>【全新界面】:全新UI设计，清新简约，让您耳目一新。</li>
                          <li>【安全支付】:支付宝支付有保障</li>
                        </ul>
                      </div>
                      <div className="tab_right clearfix">
                        <div className="download_button"><Icon type="download" /><a href="https://itunes.apple.com/cn/app/id1260502843">免费下载</a></div>
                        <img className='andriod_qr' src={require('../../assets/imgs/ios_qr1.png')} alt="android二维码"/>
                      </div>
                    </TabPane>
                  </Tabs>
            </div>
          </div>
        </section>
        <CallusFrom/>
        <Footer/>
      </div>
    )
  }
}

export default Callus;
