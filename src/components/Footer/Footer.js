import React, { PropTypes } from 'react'
import MediaQuery from 'react-responsive';
import {Link} from 'react-router';
import './Footer.scss';

class Footer extends React.Component {
  render () {
    return (
      <div>
      <MediaQuery minWidth={750}>
      <footer className='footer_large'>
        <div className='ajk_footer_content clearfix'>
          <figure>
            <img src={require('../../assets/imgs/ios_qr1.png')} alt="ios二维码"/>
            <figcaption>ios下载</figcaption>
          </figure>
          <figure>
            <img src={require('../../assets/imgs/android_qr1.png')} alt="android二维码"/>
            <figcaption>android下载</figcaption>
          </figure>
          <figure>
            <img src={require('../../assets/imgs/qrajk.jpg')} alt="微信关注二维码"/>
            <figcaption>微信关注</figcaption>
          </figure>
          <dl>
            <dt>关于我们</dt>
              <dd><Link to='dynamics'>公司动态</Link></dd>
              <dd><Link to='joinus'>合作优势</Link></dd>
          </dl>
          <dl>
            <dt><Link to='reform'>智能改造</Link></dt>
            <dd><Link to='experience'>智能体验</Link></dd>
            <dd><Link to='instance'>成功案例</Link></dd>
          </dl>
          <dl className='callus'>
            <dt>联系我们</dt>
            <dd>浙江爱居客网络科技有限公司</dd>
            <dd>地址：浙江省杭州市西湖区花蒋璐468号久良科技6楼</dd>
            <dd>联系电话/传真：0571-86680813</dd>
            <dd>邮箱：zj_aijuke@163.com</dd>
          </dl>
        </div>
        <div className="copy">
        &copy;&nbsp;2017爱居客&nbsp;版权所有|浙ICP备16042888号-1
        </div>
      </footer>
      </MediaQuery>
      <MediaQuery maxWidth={750}>
        <footer className='footer_medium'>
          <ul>
            <li>联系我们</li>
            <li>浙江爱居客网络科技有限公司</li>
            <li>地址：浙江杭州市西湖区花蒋璐468号久良科技6楼</li>
            <li>联系电话/传真：0571-86680813</li>
            <li>邮箱：zj_aijuke@163.com</li>
          </ul>
          <div className="qr">
            <figure>
              <img src={require('../../assets/imgs/ios_qr.png')} alt="ios二维码"/>
              <figcaption>ios下载</figcaption>
            </figure>
            <figure>
              <img src={require('../../assets/imgs/android_qr1.png')} alt="android二维码"/>
              <figcaption>android下载</figcaption>
            </figure>
            <figure>
              <img src={require('../../assets/imgs/750/qr.png')} alt="微信关注二维码"/>
              <figcaption>微信关注</figcaption>
            </figure>
          </div>
          <p className='copy'>&copy;&nbsp;2017爱居客&nbsp;版权所有|浙ICP备16042888号-1</p>
        </footer>
      </MediaQuery>
      </div>
    )
  }
}
 export default Footer;
