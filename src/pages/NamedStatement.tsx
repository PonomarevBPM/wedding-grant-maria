import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import { Timer } from '../components/Timer';
import { Theme } from '../styles/theme';
import { GuestName } from '../utils/GuestName';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';
import { NamedStatementText } from './constants';

const useStyles = createUseStyles((theme: Theme) => ({
  statementContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60,
    overflow: 'hidden',
  },
  statementNames: {
    fontFamily: theme.font.rammillas,
    fontSize: 25,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
  },
  statementText: {
    fontFamily: theme.font.commons,
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 45,
  },
  timerHeading: {
    fontFamily: theme.font.rammillasBold,
    fontSize: 20,
    position: 'relative',
    marginBottom: 60,
  },
  pin: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: '-90%',
    left: '85%',
    zIndex: -1,
    transform: 'rotate(240deg)',
    overflow: 'hidden',
  },
  pic: {
    aspectRatio: 1,
    width: 100,
  },
}));

export function NamedStatement() {
  const classes = useStyles();

  const { guestsName } = useParams();

  return (
    <AnimatedBaseLayout>
      <div className={classes.statementContainer}>
        <GuestName guest={guestsName} />
        <span className={classes.statementText}>
          <NamedStatementText />
        </span>
        <span className={classes.timerHeading}>
          ДО СВАДЬБЫ ОСТАЛОСЬ
          <div className={classes.pin}>
            <img
              src={`${import.meta.env.BASE_URL}imgs/namedStatement/timer_detail.png`}
              className={classes.pic}
            />
          </div>
        </span>
        <Timer />
      </div>
    </AnimatedBaseLayout>
  );
}
