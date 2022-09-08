import classes from "./ModalInfo.module.scss";
import { Card, Button } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faWeightScale,
  faUpDown,
  faSprayCanSparkles,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import Avatar from "../UI/Avatar";

const ModalInfo: React.FC<{ gnome: any; onConfirm: any, friendRequest:any }> = (props: any) => {
  const {
    name,
    age,
    height,
    weight,
    hair_color,
    professions,
    thumbnail,
    friends,
  } = props.gnome;

  const friendHanlder = (event: any) => {
    const friendName: string = event.target.innerHTML;
    props.friendRequest(friendName);
  }

  const allProfessions = professions.map((profession: string) => (
    <li key={uuid()}>{profession}</li>
  ));

  const allFriends = friends.map((friend: string) => (
    <li key={uuid()} onClick={friendHanlder}>{friend}</li>
  ));


  return (
    <>
    <div className={classes.backdrop} onClick={props.onConfirm} data-testid="backdrop"></div>
      <Card className={classes.modal}>
        <div className={classes.modal__actions}>
          <Button onClick={props.onConfirm}>
            <FontAwesomeIcon icon={faCircleXmark} data-testid="closeButton" />
          </Button>
        </div>

        <header className={classes.modal__header}>
          <h2>GNOME DETAILS</h2>
        </header>
        <div className={classes.modal__content}>
          <div className={classes.modal__content__avatar}>
            <Avatar src={thumbnail} alt={`${name} portrait`} />
          </div>
          <div className={classes.modal__content__info}>
            <h3>{name}</h3>
            <dl>
              <dt>
                <h4>
                  <FontAwesomeIcon icon={faCakeCandles} /> AGE
                </h4>
              </dt>
              <dd>{age} years</dd>
              <dt>
                <h4>
                  <FontAwesomeIcon icon={faWeightScale} /> WEIGHT
                </h4>
              </dt>
              <dd>{weight.toFixed(2)}kg</dd>
              <dt>
                <h4>
                  <FontAwesomeIcon icon={faUpDown} /> HEIGHT
                </h4>
              </dt>
              <dd>{height.toFixed(2)}m</dd>
              <dt>
                <h4>
                  <FontAwesomeIcon icon={faSprayCanSparkles} /> HAIR COLOR
                </h4>
              </dt>
              <dd>{hair_color}</dd>
            </dl>
          </div>
          <div className={classes.modal__content__professions}>
            <h3>PROFESSIONS</h3>
            <ul>
              {allProfessions.length > 0 ? (
                allProfessions
              ) : (
                <p style={{ gridColumn: "1/4" }}>Doesn't work 🏖️</p>
              )}
            </ul>
          </div>
          <div className={classes.modal__content__friends}>
            <h3>FRIENDS</h3>
            <ul>
              {allFriends.length > 0 ? (
                allFriends
              ) : (
                <p style={{ gridColumn: "1/4", cursor: "default" }}>This is a lonely gnome 🐺</p>
              )}
            </ul>
          </div>
        </div>
      </Card>
      </>
  );
};

export default ModalInfo;
