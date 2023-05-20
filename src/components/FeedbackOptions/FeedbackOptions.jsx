import PropTypes from 'prop-types';
import { BtnList, Btn } from '../FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(option => (
        <li key={option}>
          <Btn onClick={onLeaveFeedback} id={option}>
            {option}
          </Btn>
        </li>
      ))}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
