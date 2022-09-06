import classes from "./GnomeList.module.scss";
import Gnome from "./Gnome";

const GnomeList: React.FC<{ gnomes: any[] }> = (props) => {
  const gnomesGathered = () => {
    if (props.gnomes.length > 0) {
      try {
      return props.gnomes.map((gnome) => (
        <Gnome
          key={gnome.id}
          id={gnome.id}
          avatar={gnome.thumbnail}
          name={gnome.name}
          profession={gnome.professions}
          hair_color={gnome.hair_color}
          age={gnome.age}
          weight={gnome.weight}
          height={gnome.height}
        />
      ));
      } catch(error) {
        console.log(error);
      }
    }
  };

  return (
    <section className={classes["gnome-list"]}>
      {props.gnomes && gnomesGathered()}
    </section>
  );
};

export default GnomeList;
