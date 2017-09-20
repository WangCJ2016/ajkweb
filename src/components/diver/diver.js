import React from 'react';
import PropTypes from 'prop-types';
import './diver.scss';
const Diver = (props)=>{
  return <p className='ajk_diver' style={{width:props.width,height:props.height}}></p>
}
Diver.prototypes = {
  width:PropTypes.string,
  height:PropTypes.string
}
Diver.defaultProps = {
  width: '90px',
  height: '4px'
};
export default Diver;
