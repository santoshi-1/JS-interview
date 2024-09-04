import "./App.css";
import AutoComplete from "./components/AutoComplete";


function App() {
  // const staticData = [
  //   "apple",
  //   "banana",
  //   "berrl",
  //   "orange",
  //   "grape",
  //   "mango",
  //   "melon",
  //   "berry",
  //   "peach",
  //   "cherry",
  //   "plum",
  // ];

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("result indide", result);
    return result.recipes;
  };



  return (
    <>
      <h1>Autosuggest</h1>
      <AutoComplete
        placeholder={"Enter Recipe"}
        fetchSuggestions={fetchSuggestions}
        // staticData={staticData}
        dataKey={"name"}
        customLoading={<>Loading recipes...............</>}
        onSelect={(res) => {
          console.log(res);
        }}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
    </>
  );
}

export default App;
