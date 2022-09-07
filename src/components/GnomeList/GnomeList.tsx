import classes from "./GnomeList.module.scss";
import { Box, Grid, InfiniteScroll } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import Gnome from "./Gnome";
import { useEffect, useState } from "react";


const GnomeList: React.FC<{ gnomes: any[] }> = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled: number = window.scrollY;
      scrolled > 200 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  let gnomesInfiniteScroll;

  const gnomesGathered = () => {
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
  };

  if (props.gnomes.length > 0) {
    const allGnomes = gnomesGathered();

    gnomesInfiniteScroll = (
      <Grid className={classes["gnome-list"]}>
        <InfiniteScroll
          items={allGnomes}
          step={10}
          onMore={() => console.log("!!! onMore")}
        >
          {(gnome: any, index: number) => <Box key={index}>{gnome}</Box>}
        </InfiniteScroll>
      </Grid>
    );
  }

  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {gnomesInfiniteScroll && gnomesInfiniteScroll}
      {visible&&
      <FontAwesomeIcon
        icon={faCircleUp}
        onClick={toTop}
        className={classes[`to-top`]}
      />}
    </section>
  );
};

export default GnomeList;
