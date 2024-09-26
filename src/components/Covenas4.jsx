import covenas4 from '../assets/covenas4.jpg';
import PropTypes from 'prop-types';


export const Covenas4 = ( className ) => {
  return (
    <img src={covenas4} alt='Covenas4' className={className} />

  )
}

Covenas4.propTypes = {
    className: PropTypes.string
}
