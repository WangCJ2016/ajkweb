import React, { PropTypes } from 'react'
import './DynamicsItems.scss';
import Diver from '../../../components/diver/diver'
import { Pagination } from 'antd';
import {Link} from 'react-router';
import config from '../../../assets/common/confing.js'
import request from '../../../assets/common/request.js'

class DynamicsItems extends React.Component {
  constructor(){
    super();
    this.state = {
      items:[],
      totalPages:0
    }
  }
  componentDidMount() {
    this._loadItems(1)
  }
  _loadItems(Num){
    request.get(config.api.base + config.api.queryDynamicsPage,{pageNo:Num,pageSize:6})
    .then(res=>{
      if(res.success&&res.result){
        this.setState({
          items:res.result,
          totalPages:res.totalPages
        })
      }
    })
  }
  onChange(num){
    this._loadItems(num)
  }
  render () {
    const items = this.state.items;
    return(
      <section className="dynamics_content">
        {
          items?items.map((item,index)=>(
            <Link key={item.id} to={`dynamics/hotel/${item.id}`} className='item clearfix' >
              <div className="left">
                <img src={item.picture} alt={item.title}/>
              </div>
              <div className="right">
                <h5>{item.title}</h5>
                <Diver width='45px' height='3px' />
                <p>{item.profile}</p>
                <p><span>{item.gmtCreate.split(' ')[0]}</span><span>查看更多>></span></p>
              </div>
            </Link>
          )):null
        }
        <div className="pagination">
          <Pagination defaultCurrent={1} total={this.state.totalPages} onChange={this.onChange.bind(this)}/>
        </div>
      </section>
    )
  }
}

export default DynamicsItems;
