import React, { PropTypes } from 'react'
import { Menu, Dropdown, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import './Header.scss';

class MobileHeader extends React.Component {
  constructor(){
    super();
    this.state = {
      current: '1',
    openKeys: [],
    }
  }
  handleClick = (e) => {
   this.setState({ current: e.key });
 }
 onOpenChange = (openKeys) => {
   let openKey = this.state.openKeys;
  if (openKey.length==0) {
    this.setState({
      openKeys:['item_1']
    })
  }else {
    this.setState({
      openKeys:[]
    })
  }
 }
  render () {
    const menu = (
  <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
  >
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">首页</a>
    </Menu.Item>
    <SubMenu title='爱居客智慧'>
      <Menu.Item key="setting:1">爱居客智慧体验</Menu.Item>
      <Menu.Item key="setting:2">智慧产品</Menu.Item>
      <Menu.Item key="setting:3">智慧改造方案</Menu.Item>
      <Menu.Item key="setting:4">成功案例</Menu.Item>
    </SubMenu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">平台优势</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">公司动态</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">联系我们</a>
    </Menu.Item>
  </Menu>
);
    return (
      <header className='mobileHeader'>
        <ul>
          <li>
          <Dropdown overlay={menu} trigger={['click']}>
           <a className="ant-dropdown-link" href="#">
            <Icon type="down" />
           </a>
          </Dropdown>
          </li>
          <li>
            <img src={require("../../assets/imgs/logo.png")} alt=""/>
          </li>
        </ul>
      </header>
    )
  }
}

export default MobileHeader;
