import React, { PropTypes } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
class Dynamics extends React.Component {
  componentDidMount() {
    document.title = '公司动态-爱居客智慧酒店综合服务管理平台'
  }
  render () {
    return(
      <div>
        <Header current='dynamics'/>
        <section className="reform_topImg">
          <h5>公司动态</h5>
        </section>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Dynamics;
