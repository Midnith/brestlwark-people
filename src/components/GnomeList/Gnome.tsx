import classes from "./Gnome.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faWeightScale,
  faUpDown,
  faSprayCanSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

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
    <li>{profession}</li>
  ));

  return (
    <Card className={classes.gnome}>
      <div className={classes["avatar-wrap"]}>
        <img
          alt="User portrait"
          src={props.avatar}
          className={classes.avatar}
        />
      </div>
      <h2>{props.name}</h2>
      <div>
        <section>
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
              <dd>{props.height.toFixed(2)}m</dd>
            </div>
            <div className={classes.characteristic}>
              <dt>
                <FontAwesomeIcon icon={faUpDown} />
              </dt>
              <dd>{props.weight.toFixed(2)}m</dd>
            </div>
            <div className={classes.characteristic}>
              <dt>
                <FontAwesomeIcon icon={faSprayCanSparkles} />
              </dt>
              <dd>{props.hair_color}</dd>
            </div>
          </dl>
        </section>
        <section>
          <ul>
            {allProfessions.length > 0 ? (
              allProfessions
            ) : (
              <p>This gnome doesn't work 🏖️</p>
            )}
          </ul>
        </section>
      </div>
    </Card>
  );
};

export default Gnome;
