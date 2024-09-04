import React from "react";
import PropTypes from "prop-types";

const SuggestionsList = ({
  suggestions = [],
  highlight,
  dataKey,
  onSuggestionClick,
}) => {
  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    console.log(parts);
    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          );
        })}
      </span>
    );
  };

  return (
    <React.Fragment>
      {suggestions.map((suggestion, index) => {
        const currSuggestion = dataKey ? suggestion[dataKey] : suggestion;

        return (
          <li
            className="suggestion-item"
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
          >
            {getHighlightedText(currSuggestion, highlight)}
          </li>
        );
      })}
    </React.Fragment>
  );
};

SuggestionsList.propTypes = {
  highlight: PropTypes.string,
};

export default SuggestionsList;
