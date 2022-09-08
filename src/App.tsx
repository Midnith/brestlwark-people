import classes from "./App.module.scss";
import { Spinner } from "grommet";
import GnomeList from "./components/GnomeList/GnomeList";
import React, { useState, useEffect, useRef } from "react";

const App: React.FC<{}> = (props) => {
  const [allGnomes, setAllGnomes] = useState<any[]>([]);
  const [filteredGnomes, setFilteredGnomes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const fetchGnomes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );
      const data = await response.json();

      setAllGnomes(data.Brastlewark);
    } catch (error: any) {
      throw Error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGnomes();
  }, []);

  const searchHandler = () => {
    const search = searchRef.current?.value.toLowerCase();
    const filter = allGnomes.filter(
      (gnome) => gnome.name.toLowerCase().indexOf(search) !== -1
    );

    setFilteredGnomes(filter);
  };

  return (
    <main className={classes.App} role="main">
      <h1>Brastlewark citizens 🧙‍♂️</h1>
      {!isLoading && (
        <input
          role="searchbox"
          className={classes.App__search}
          type="text"
          placeholder="Search citizen"
          ref={searchRef}
          onChange={searchHandler}
        ></input>
      )}
      {
        <GnomeList
          gnomes={
            searchRef.current?.value.length! > 0 ? filteredGnomes : allGnomes
          }
        />
      }
      {isLoading && <Spinner data-testid="spinner" />}
    </main>
  );
};

export default App;
