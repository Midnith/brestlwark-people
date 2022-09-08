import classes from "./App.module.scss";
import { Spinner } from "grommet";
import GnomeList from "./components/GnomeList/GnomeList";
import { useState, useEffect } from "react";

const App: React.FC<{}> = (props) => {
  const [allGnomes, setAllGnomes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <main className={classes.App}>
      <h1>Brastlewark citizens 🧙‍♂️</h1>
      {<GnomeList gnomes={allGnomes} />}
      {isLoading && <Spinner />}
    </main>
)};

export default App;
