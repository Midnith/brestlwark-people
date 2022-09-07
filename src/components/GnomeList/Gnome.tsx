import classes from "./Gnome.module.scss";
import { useState, useReducer, useEffect } from "react";
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
  gnome: {},
  gnomes: any
}> = (props: any) => {
  const reducerModal = (state:any, action:any) => {
    switch (action.type) {
      case 'SHOW':
        return !state;
      case 'HIDE':
        return !state;
      default:
        throw new Error();
    }
  }
  const [showModal, dispatchShowModal] = useReducer(reducerModal, false);
  const [showFriend, setShowFriend] = useState("");
  const [gnomeModal, setGnomeModal] = useState(props.gnome);
  const { name, age, height, weight, hair_color, professions, thumbnail} = props.gnome;

  const friendHanlder = (name: string) => {
    setShowFriend(name);
  }

  useEffect(()=>{
    const myGnomeFriend = props.gnomes.filter((gnome:any) => gnome.name === showFriend);
    setGnomeModal(myGnomeFriend[0]);
    
  },[showFriend, props.gnomes]);

  const allProfessions = professions.map((profession:string) => (
    <li key={uuid()}>{profession}</li>
  ));

  return (
    <Card className={classes.gnome}>
      {showModal&&<Modal gnome={gnomeModal?gnomeModal:props.gnome} onConfirm={()=>dispatchShowModal({type: "SHOW"})} friendRequest={friendHanlder} />}
      <div className={classes["gnome__info"]}>
        <span className={classes.circle} onClick={()=>dispatchShowModal({type: "HIDE"})}></span>
        <span
          className={classes["gnome__details"]}
          onClick={()=>dispatchShowModal({type: "HIDE"})}
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
            <dd>{weight.toFixed(2)}kg</dd>
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
