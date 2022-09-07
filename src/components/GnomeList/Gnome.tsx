import classes from "./Gnome.module.scss";
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

const Gnome: React.FC<{
  id: number;
  avatar: string;
  name: string;
  profession: string[];
  hair_color: string;
  age: number;
  weight: number;
  height: number;
}> = (props) => {
  const allProfessions = props.profession.map((profession) => (
    <li key={uuid()}>{profession}</li>
  ));

  return (
    <Card className={classes.gnome}>
      <div className={classes["gnome__info"]}>
        <span className={classes.circle}></span>
        <span className={classes["gnome__details"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <Avatar src={props.avatar} alt="User portrait" />
        <h3>{props.name}</h3>

        <dl className={classes.allCharacteristics}>
          <div className={classes.characteristic}>
            <dt>
              <FontAwesomeIcon icon={faCakeCandles} />
            </dt>
            <dd>{props.age} years</dd>
          </div>
          <div className={classes.characteristic}>
            <dt>
              <FontAwesomeIcon icon={faWeightScale} />
            </dt>
            <dd>{props.weight.toFixed(2)}m</dd>
          </div>
          <div className={classes.characteristic}>
            <dt>
              <FontAwesomeIcon icon={faUpDown} />
            </dt>
            <dd>{props.height.toFixed(2)}m</dd>
          </div>
          <div className={classes.characteristic}>
            <dt>
              <FontAwesomeIcon icon={faSprayCanSparkles} />
            </dt>
            <dd>{props.hair_color} hair</dd>
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
