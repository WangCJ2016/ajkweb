import React, { PropTypes } from 'react';
import classname from 'classname'
import './models.scss';
class ExperienceModels extends React.Component {
  constructor(){
    super();
    this.state = {
      activeIndex:0
    }
  }
  itemRender(){
    const models = ['clock','evening','book','Checkout','movie','cust','qingjing'];
   return models.map((model,index)=>{
      model = this.state.activeIndex == index?model+1:model;
      return [<p key={index} onMouseEnter={this.selectItem.bind(this,index)} onClick={this.selectItem.bind(this,index)}>
        <img src={require('../../../assets/imgs/'+model+'.png')} alt={model}/>
      </p>,' ']
    })
  }
  contentRender(){
    const contents = [{img:"qingchen",title:'早起模式',contents:['灯逐渐亮起','窗帘缓缓拉开','空调自动关闭','新风系统启动','优美音乐响起'
]},{img:"rs2",title:'入睡模式',contents:['灯逐渐熄灭','窗帘缓缓合上','空调睡眠模式','其余电器关闭'
]},{img:"yd1",title:'阅读模式',contents:['灯调成阅读状态','舒缓音乐响起','体感最适宜温度'
]},{img:"likai",title:'外出模式',contents:['灯逐渐熄灭','窗帘缓缓合上','空调睡眠模式','其余电器关闭'
]},{img:"yy",title:'影音模式',contents:['根据用户习惯自动调整灯光','自动设定电视频道','自动设定音响设备'
]},{img:"hk",title:'会客模式',contents:['灯调至柔和状态','窗帘自动打开','电器设备调至静音','客人在舒适的环境中交谈'
]},{img:"lock",title:'自定义模式',contents:['定制专属于你的个人模式','可记录保存'
]}];
  const items = contents.map((content,index)=>{
    const style = this.state.activeIndex==index?classname({content:true,show:true}):classname({content:true,show:false});
    return <div className={style} key={index}>
      <div className='left'>
        <img src={require(`../../../assets/imgs/${content.img}.png`)} alt={content.title}/>
      </div>
      <div className='right'>
        <h5>{content.title}</h5>
        <p className='diver'></p>
        <ul>
          {content.contents.map((item,key)=>(
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  })
  return items
  }
  selectItem(key){
    this.setState({
      activeIndex:key
    })
  }
  render () {
    return(
      <section className="experience_sleep">
        <div className="sleep_wrap">
        {this.contentRender()}
        <div className="selects">
          <div className="items">
            {this.itemRender()}
          </div>
        </div>
        </div>
      </section>
    )
  }
}

export default ExperienceModels;
