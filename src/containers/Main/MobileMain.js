import React, { PropTypes } from 'react'
import Header from '../../components/Header/MobileHeader.js';
import Footer from '../../components/Footer/Footer'

class MainContainer extends React.Component {
  render () {
    return(
      <div>
          <Header />
          <Footer />
      </div>
    )
  }
}

export default MainContainer;
