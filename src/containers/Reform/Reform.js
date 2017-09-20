import React, { PropTypes } from 'react'

import './reform.scss';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ReformItems from './ReformItems/ReformItems'

class Reform extends React.Component {
  componentDidMount() {
     document.title = '智慧改造-爱居客智慧酒店综合服务管理平台'
  }
  render () {
    return (
      <div>
        <Header current='reform'/>
        <section className="reform_topImg">
          <h5>智能化改造</h5>
          <p>爱居客房间改造 智能化产品</p>
        </section>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Reform;
