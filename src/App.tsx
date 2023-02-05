import "normalize.css";
import "./App.css";

import Header from "./components/Header";
import Filters from "./components/Filters";
import SearchInput from "./components/SearchInput";
import CharactersTable from "./components/CharactersTable";
import { CharactersProvider } from "./contexts/characters";
import SelectedCharacters from "./components/SelectedCharacters";

function App() {
  return (
    <CharactersProvider>
      <Header />
      <SelectedCharacters />
      <SearchInput />
      <Filters />
      <CharactersTable />
    </CharactersProvider>
  );
}

export default App;
