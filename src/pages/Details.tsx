import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const useStyles = createUseStyles((theme: Theme) => ({
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  detailsHeading: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  detailsText: {
    fontFamily: theme.font.commons,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

export function Details() {
  const classes = useStyles();

  return (
    <AnimatedBaseLayout>
      <div className={classes.detailsContainer}>
        <span className={classes.detailsHeading}>детали</span>
        <span className={classes.detailsText}>
          Если вы желаете поздравить нас
          <br />
          по случаю праздника, мы будем благодарны
          <br />
          денежным подаркам и обещаем
          <br />
          найти им лучшее применение
        </span>
        <img
          src={`${import.meta.env.BASE_URL}imgs/details/letter.JPG`}
          style={{ width: 100 }}
        />
        <span className={classes.detailsText}>
          Приятным комплиментом для нас
          <br />
          вместо цветов будет бутылочка вашего
          <br />
          любимого вина, которую мы
          <br />
          откроем на ближайшем празднике
        </span>
        <img
          src={`${import.meta.env.BASE_URL}imgs/details/flower.jpg`}
          style={{ width: 90, marginBottom: 5 }}
        />
        <span className={classes.detailsText}>
          По всем вопросам Вы можете обращаться
          <br />
          к нашим свадебным организаторам:
          <br />
          <br />
          Дарина +7 966 045-44-49
          <br />
          Валерия +7 909 660-79-72
        </span>
        <img
          src={`${import.meta.env.BASE_URL}imgs/details/dart_logo.png`}
          style={{ width: 150, marginTop: 20 }}
        />
      </div>
    </AnimatedBaseLayout>
  );
}
