import React, { PropTypes } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
class Instance extends React.Component {
  componentDidMount() {
     document.title = '成功案例-爱居客智慧酒店综合服务管理平台'
  }
  render () {
    return (
      <div>
        <Header current='instance'/>
        <section className="reform_topImg">
          <h5>成功案例</h5>
        </section>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Instance;
