import classes from "./App.module.scss";
import { Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import GnomeList from "./components/GnomeList/GnomeList";
import { useState } from "react";

const App: React.FC<{}> = (props) => {
  const [allGnomes, setAllGnomes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGnomes = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    );
    const data = await response.json();

    setAllGnomes(data.Brastlewark);
    setIsLoading(false);
  };

  return (
    <main className={classes.App}>
      <Button onClick={fetchGnomes} className={classes["App__button"]}>
        <FontAwesomeIcon icon={faPeopleGroup} />
        Meet its people
      </Button>

      {<GnomeList gnomes={allGnomes} />}
      {isLoading && <Spinner animation="border" variant="primary" />}
    </main>
  );
};

export default App;
