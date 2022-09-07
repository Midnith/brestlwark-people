import classes from "./Gnome.module.scss";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faWeightScale,
  faUpDown,
  faSprayCanSparkles,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "grommet";
import Avatar from "../UI/Avatar";
import Modal from "./Modal";

const Gnome: React.FC<{
  id: number;
  gnome: {}
}> = (props: any) => {
  const { name, age, height, weight, hair_color, professions, thumbnail, id} = props.gnome;
  const [showModal, setShowModal] = useState(false);


  const detailsHandler = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  const allProfessions = professions.map((profession:string) => (
    <li key={uuid()}>{profession}</li>
  ));

  return (
    <Card className={classes.gnome}>
      {showModal&&<Modal gnome={props.gnome} onConfirm={closeModal} />}
      <div className={classes["gnome__info"]}>
        <span className={classes.circle} onClick={detailsHandler}></span>
        <span
          className={classes["gnome__details"]}
          onClick={detailsHandler}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <Avatar src={thumbnail} alt="User portrait" />
        <h3>{name}</h3>

        <dl className={classes.allCharacteristics}>
          <div className={classes.characteristic}>
            <dt>
              <FontAwesomeIcon icon={faCakeCandles} />
            </dt>
            <dd>{age} years</dd>
          </div>
          <div className={classes.characteristic}>
            <dt>
              <FontAwesomeIcon icon={faWeightScale} />
            </dt>
            <dd>{weight.toFixed(2)}m</dd>
          </div>
          <div className={classes.characteristic}>
            <dt>
              <FontAwesomeIcon icon={faUpDown} />
            </dt>
            <dd>{height.toFixed(2)}m</dd>
          </div>
          <div className={classes.characteristic}>
            <dt>
              <FontAwesomeIcon icon={faSprayCanSparkles} />
            </dt>
            <dd>{hair_color} hair</dd>
          </div>
        </dl>
      </div>

      <div className={classes["gnome__skills"]}>
        <h4>PROFESSIONS</h4>
        <ul>
          {allProfessions.length > 0 ? (
            allProfessions
          ) : (
            <p style={{ gridColumn: "1/3" }}>Doesn't work 🏖️</p>
          )}
        </ul>
      </div>
    </Card>
  );
};

export default Gnome;
