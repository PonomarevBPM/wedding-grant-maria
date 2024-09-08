import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { ColorRef } from '../components/ColodrRef';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const horizontal = 750;

const useStyles = createUseStyles((theme: Theme) => ({
  dressCodeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  dressCodeHeading: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 30,
    marginTop: 15,
  },
  dressCodeText: {
    fontFamily: theme.font.commons,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  colorsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
  },
  whiteColor: {
    marginLeft: 60,
  },
  blackColor: {
    marginRight: 60,
  },
  [`@media (min-width: ${horizontal}px)`]: {
    colorsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    whiteColor: {
      marginTop: 45,
      marginLeft: 0,
    },
    blackColor: {
      margin: 0,
    },
  },
}));

export function DressCode() {
  const classes = useStyles();

  return (
    <AnimatedBaseLayout>
      <div className={classes.dressCodeContainer}>
        <span className={classes.dressCodeHeading}>
          Wedding palette
        </span>
        <span className={classes.dressCodeText}>
          мы очень старались сделать наш праздник
          <br />
          красивым, поэтому рады с вами поделиться
          <br />
          цветами нашей свадьбы! Их можно учесть
          <br />
          при выборе ваших образов
        </span>
        {/* <span className={classes.dressCodeText}>
          Просим воздержаться от таких цветов,
          <br />
          как белый, черный и синий
        </span> */}
        <div className={classes.colorsContainer}>
          <ColorRef
            imgSrc={`${import.meta.env.BASE_URL}imgs/colorRef/color1.JPG`}
            className={classes.blackColor}
          >
            Нежно-голубой
          </ColorRef>
          <ColorRef
            imgSrc={`${import.meta.env.BASE_URL}imgs/colorRef/color2.JPG`}
            className={classes.whiteColor}
          >
            Травяной
          </ColorRef>
          <ColorRef
            imgSrc={`${import.meta.env.BASE_URL}imgs/colorRef/color3.JPG`}
            className={classes.blackColor}
          >
            Пыльно розовый
          </ColorRef>
          <ColorRef
            imgSrc={`${import.meta.env.BASE_URL}imgs/colorRef/color4.JPG`}
            className={classes.whiteColor}
          >
            Кофе с молоком
          </ColorRef>
          <ColorRef
            imgSrc={`${import.meta.env.BASE_URL}imgs/colorRef/color5.JPG`}
            className={classes.blackColor}
          >
            Жемчужный
          </ColorRef>
        </div>
      </div>
    </AnimatedBaseLayout>
  );
}
