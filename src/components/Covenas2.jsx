import covenas2 from '../assets/covenas2.jpg';
import PropTypes from 'prop-types';


export const Covenas2 = ( className ) => {
  return (
    <img src={covenas2} alt='Covenas2' className={className} />

  )
}

Covenas2.propTypes = {
    className: PropTypes.string
}


