import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import SuggestionsList from "./SuggestionsList";
import debounce from "lodash/debounce";

const AutoComplete = ({
  placeholder,
  fetchSuggestions,
  staticData,
  dataKey,
  customLoading,
  onSelect,
  onChange,
  onBlur,
  onFocus,
  customStyles,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(suggestions);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(dataKey ? suggestion[dataKey] : suggestion);
    onSelect(suggestion);
    setSuggestions([]);
  };

  const getSuggestions = async (query) => {
    setError(null);
    setLoading(true);
    try {
      let result;

      if (staticData) {
        result = staticData.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query);
        console.log("******* result is *******", result);
        setSuggestions(result);
      }
    } catch (e) {
      setError("Failed to fetch suggestions!");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const getSuggestionsDebounced = useCallback(
    debounce(getSuggestions, 300),
    []
  );

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestionsDebounced(inputValue);
    } else {
      setSuggestions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="container">
      <input
        type="text"
        style={customStyles}
        value={inputValue}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={handleInputChange}
      />

      {(suggestions.length > 0 || loading || error) && (
        <ul className="suggestions-list">
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">{customLoading}</div>}
          <SuggestionsList
            dataKey={dataKey}
            highlight={inputValue}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
    </div>
  );
};

AutoComplete.propTypes = {
  placeholder: PropTypes.string,
  fetchSuggestions: PropTypes.func,
  staticData: PropTypes.array,
  dataKey: PropTypes.string,
  customLoading: PropTypes.elementType,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  customStyles: PropTypes.object,
};

export default AutoComplete;
