import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import './ReformItems.scss';
import config from '../../../assets/common/confing.js'
import request from '../../../assets/common/request.js'

class ReformItems extends React.Component {
  constructor(){
    super();
    this.state = {
      items: {}
    }
  }
  componentDidMount() {
    request.get(config.api.base + config.api.queryProductPage)
    .then(res=>{
      this.setState({
        items:res.dataObject
      })
    })
  }
  itemRender(){
    const items = Object.entries(this.state.items);

    return items.length?items.map((item,index)=>{
      return  <section key={index} className="reformItems">
                <h5 className="title">{item[0]}</h5>
                <div className="diver"></div>
                <div className="items">
                  {item[1].map((pro,inex)=>{
                  return    <Link to={`reform/product/${pro.id}`} key={pro.id} className="item">
                              <div className='img'>
                                <img src={pro.picture} alt={pro.title}/>
                              </div>
                                <h5>{pro.title}</h5>
                                <p>{pro.profile||'1'}</p>
                            </Link>
                  })}
                </div>
              </section>
    }):null
  }
  render () {
    return (
      <div>
        {this.itemRender()}
      </div>
    )
  }
}

export default ReformItems;
