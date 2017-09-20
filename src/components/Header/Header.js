import React, { PropTypes } from 'react'
import {Menu,Col,Row} from 'antd';
import {Link} from 'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import MediaQuery from 'react-responsive';
import './Header.scss'
import MediumNav from './mediumNav.js'
class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      current:'shouye'
    }
  }
  handleClick = (e)=> {
    this.setState({
      current:e.key
    })
  }
  render () {
    const current = this.props.current
    return(
      <div>
        <header className='pcHeader'>
         <Row>
          <nav className="ajk_header_content">
            <Link className='logo' to={'/'}>
              <img src={require('../../assets/imgs/logo.png')} alt="爱居客logo"/>
            </Link>
            <Col span={4}></Col>
            <MediaQuery query='(min-width: 900px)'>
            <Menu
             onClick={this.handleClick}
             selectedKeys={[current]}
             mode="horizontal">
              <Menu.Item key='shouye'>
                <Link to={`/`} activeClassName="active">首页</Link>
              </Menu.Item>
              <Menu.Item key='experience'>
                <Link to={`/experience`} activeClassName="active">智慧平台体验</Link>
              </Menu.Item>
              <Menu.Item key='reform'>
                <Link to={`/reform`} activeClassName="active">智慧改造</Link>
              </Menu.Item>
              <Menu.Item key='instance'>
                <Link to={`/instance`} activeClassName="active">成功案例</Link>
              </Menu.Item>
              <Menu.Item key='join'>
                <Link to={`/joinus`} activeClassName="active">合作优势</Link>
              </Menu.Item>
              <Menu.Item key='dynamics'>
                <Link to={`/dynamics`} activeClassName="active">公司动态</Link>
              </Menu.Item>
              <Menu.Item key='callus'>
                <Link to={'/callus'} activeClassName="active">联系我们</Link>
              </Menu.Item>
            </Menu>
            </MediaQuery>
            <MediaQuery maxWidth={899}>
              <MediumNav selectedKeys={current}>
                <Link key='shouye' to={`/`} >首页</Link>
                <Link key='experience' to={`/experience`} >智慧平台体验</Link>
                <Link key='reform' to={`/reform`} >智慧改造</Link>
                <Link key='instance' to={`/instance`} >成功案例</Link>
                <Link key='join' to={`/joinus`} >合作优势</Link>
                <Link key='dynamics' to={`/dynamics`} >公司动态</Link>
                <Link key='callus' to={'/callus'} >联系我们</Link>
              </MediumNav>
            </MediaQuery>
          </nav>
          </Row>
        </header>
      </div>
    )
  }
}

export default Header;
