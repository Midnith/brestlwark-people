import classes from "./GnomeList.module.scss";
import { useEffect, useState } from "react";
import { Box, Grid, InfiniteScroll } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import Gnome from "./Gnome";


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
        gnome={gnome}
        gnomes={props.gnomes}
      />
    ));
  };

  if (props.gnomes.length > 0) {
    const allGnomes = gnomesGathered();

    gnomesInfiniteScroll = (
      <Grid className={classes["gnome-list"]} role="contentinfo">
        <InfiniteScroll
          items={allGnomes}
          step={10}
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
        data-testid="to-top"
      />}
    </section>
  );
};

export default GnomeList;
