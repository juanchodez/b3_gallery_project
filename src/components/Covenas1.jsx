import covenas1 from '../assets/covenas1.jpg';
import PropTypes from 'prop-types';


export const Covenas1 = ( className ) => {
  return (
    <img src={covenas1} alt='Covenas1' className={className} />

  )
}

Covenas1.propTypes = {
    className: PropTypes.string
}


