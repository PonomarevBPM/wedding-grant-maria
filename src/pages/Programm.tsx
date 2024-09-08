import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';
import { header } from './constants';

const useStyles = createUseStyles((theme: Theme) => ({
  programmContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 45,
    gap: 45,
  },
  programmHeading: {
    fontFamily: theme.font.rammillas,
    textTransform: 'uppercase',
    fontSize: 36,
  },
  programmTime: {
    fontFamily: theme.font.brownSugar,
    fontSize: 35,
  },
  programmText: {
    fontFamily: theme.font.rammillas,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  leave: {
    position: 'absolute',
    zIndex: '-1',
    left: '5%',
    top: '5%',
    width: 150,
    transform: 'rotate(-30deg)',
  },
  programmBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  delimiter: {
    width: 200,
    marginTop: -30,
  },
  programmDate: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 25,
    fontFamily: theme.font.brownSugar,
    '&::before': {
      display: 'block',
      content: '""',
      borderTop: 'solid 1px black',
      width: 40,
      marginRight: 15,
    },
    '&::after': {
      display: 'block',
      content: '""',
      borderTop: 'solid 1px black',
      width: 40,
      marginLeft: 15,
    },
  },
}));

export function Programm() {
  const classes = useStyles();

  return (
    <AnimatedBaseLayout>
      <div className={classes.programmContainer}>
        <span className={classes.programmHeading}>Программа Дня</span>

        <div className={classes.programmBlock}>
          <span className={classes.programmTime}>16:00</span>
          <span className={classes.programmText}>Сбор гостей</span>
        </div>
        {/* <div className={classes.programmBlock}>
          <span className={classes.programmTime}>16:00</span>
          <span className={classes.programmText}>Церемония</span>
        </div> */}
        <div className={classes.programmBlock}>
          <span className={classes.programmTime}>17:00</span>
          <span className={classes.programmText}>Начало ужина</span>
        </div>
        <div className={classes.programmBlock}>
          <span className={classes.programmTime}>21:30</span>
          <span className={classes.programmText}>Вкусный тортик</span>
        </div>
        <div className={classes.programmBlock}>
          <span className={classes.programmTime}>23:00</span>
          <span className={classes.programmText}>Финал вечера </span>
        </div>
        {/* <img
          className={classes.leave}
          src={`${import.meta.env.BASE_URL}imgs/program/leave.JPG`}
        /> */}
        <span className={classes.programmDate}>{header.date}</span>
        <img
          className={classes.delimiter}
          src={`${import.meta.env.BASE_URL}imgs/program/delimiter.JPG`}
        />
      </div>
    </AnimatedBaseLayout>
  );
}
