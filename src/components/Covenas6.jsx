import covenas6 from '../assets/covenas6.jpg';
import PropTypes from 'prop-types';


export const Covenas6 = ( className ) => {
  return (
    <img src={covenas6} alt='Covenas6' className={className} />

  )
}

Covenas6.propTypes = {
    className: PropTypes.string
}
