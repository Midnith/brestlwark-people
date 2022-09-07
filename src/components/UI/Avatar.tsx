import classes from "./Avatar.module.scss";

const Avatar: React.FC<{src:string, alt:string}> = (props) => {
    return(
        <img
          src={props.src}
          alt={props.alt}
          className={classes.avatar}
        />
    );
}

export default Avatar;