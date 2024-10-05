import "./App.css";
import { useCallback, useRef, useState } from "react";
import InfiniteScroll from "./components/InfiniteScroll";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const controllerRef = useRef(null);

  const handleInput = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [query]
  );

  const getData = useCallback(
    async (query, page) => {
      try {
        if (controllerRef.current) controllerRef.current.abort();

        controllerRef.current = new AbortController();

        await axios
          .get("https://openlibrary.org/search.json", {
            signal: controllerRef.current.signal,
            params: { q: query, page: page },
          })
          .then((response) => {
            console.log(response.data);
            const data = response.data;
            setData((prevData) => [...prevData, ...data.docs]);
          });
      } catch (e) {
        console.log("Error in fetching the data ......", e);
      }
    },
    [query]
  );

  const renderItem = useCallback(({ title }, key, ref) => (
    <div key={key} ref={ref}>
      {title}
    </div>
  ));

  return (
    <div>
      <input onChange={handleInput} value={query} />

      <InfiniteScroll
        renderListItem={renderItem}
        getData={getData}
        listData={data}
        query={query}
      />
    </div>
  );
}

export default App;
