import PropTypes from 'prop-types';
import s from './Alert.module.css';

function Alert({ text, type }) {
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

// если заранее не знаем значение - s[type] - выюирает из массива ['success', 'warning', 'error']

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};

export default Alert;
