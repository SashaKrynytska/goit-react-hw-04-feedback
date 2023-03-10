import React from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <>
        <button
          type="button"
          //   key={option}
          key={option.toString()}
          className={css.feedback_button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </>
    );
  });

FeedbackOptions.propTypes = {
  key: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
