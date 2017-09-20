import React from 'react';
import PropTypes from 'prop-types';
import Diver from '../diver/diver.js'
import './sectionTitle.scss'

const SectionTitle = (props) => {
  return (
    <div className='sectionTitle'>
      <h3>{props.title}</h3>
      <Diver width='80px' height="4px"/>
      <p>{props.intr}</p>
    </div>
  )
}
SectionTitle.prototypes = {
  title:PropTypes.string.isRequired,
  height:PropTypes.string.isRequired
}

export default SectionTitle;
