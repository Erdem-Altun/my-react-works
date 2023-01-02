import React, { useState } from "react";

function Search({ weatherDetails }) {
  const api = {
    key: "1e3759f0e6a936917c9a1857e74eb01e",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [searchParameter, setSearchParameter] = useState("");

  const searchCall = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}?q=${searchParameter}&units=metric&lang=tr&appid=${api.key}`)
        .then((veri) => veri.json())
        .then((sonuc) => {
          setSearchParameter("");
          weatherDetails(sonuc);
        });
    }
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Bir Şehir Giriniz"
        onChange={(e) => setSearchParameter(e.target.value)}
        value={searchParameter}
        onKeyPress={searchCall}
      />
    </div>
  );
}

export default Search;
