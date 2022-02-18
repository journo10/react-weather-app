import React from "react";

const SearchInput = ({ inputText, setInputText, getWeatherData }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="search">
      <form onSubmit={onFormSubmit}>
        <input
          className="search-box"
          value={inputText}
          onChange={(e) => setInputText(e.target.value.toLocaleUpperCase())}
          type="text"
          placeholder="Şehir ismi giriniz..."
        />
        <button className="btn-search" onClick={getWeatherData}>
          Ara
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
