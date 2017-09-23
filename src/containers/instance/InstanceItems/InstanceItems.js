import React, { PropTypes } from 'react'
import { Pagination } from 'antd';
import {Link} from 'react-router'
import './InstanceItems.scss';
import request from '../../../assets/common/request.js'
import config from '../../../assets/common/confing.js'

class InstanceItems extends React.Component {
  constructor(){
    super();
    this.state={
      items:[],
      totalpages:0,
      currentPage:1
    }
  }
  componentDidMount() {
    this._loadData(this.state.currentPage)
  }
  _loadData(num){
    request.get(config.api.base + config.api.queryCasePage,{pageNo:num,pageSize:6})
    .then(res=>{
      this.setState({
        items:res.result,
        totalpages:res.totalPages
      })
    })
  }
  onChange(num){
    this.setState({
      currentPage:num
    })
    this._loadData(this.state.currentPage)
  }
  render () {
    const items = this.state.items;
    return (
      <div>
        <section className="instanceItems">
          {
            items?items.map((item,index)=>{
              return <Link to={`instance/item/${item.id}`} key={item.id} className="item">
                     <div className="img">
                       <img className='instance_img' src={item.picture} alt={item.title}/>
                     </div>
                     <p>{item.title}</p>
                   </Link>
            }):null
          }
        </section>
        <div style={{textAlign:'center',marginBottom:'60px',marginTop:'60px'}}>
          <Pagination defaultCurrent={1} total={this.state.totalpages} onChange={this.onChange.bind(this)}  />
        </div>
      </div>
    )
  }
}

export default InstanceItems;
