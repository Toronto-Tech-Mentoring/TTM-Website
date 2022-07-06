import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cssHeaderText: {
    fontFamily: 'Josefin Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '28px',
    lineHeight: '44px',
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    top: '856px',
    // borderBottom: '2px solid #FF7500'
  },
  cssBodyText: {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '31px',
    display: 'flex',
    alignItems: 'center',
    color: '#404040',
  },
  cssUnderline: {
    borderBottom: '2px solid #FF7500',
  },
}));

export default function WhyTech() {
  const classes = useStyles();

  return (
    <div>
      <svg viewBox="0 0 855 536" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M450.564 405.405C381.558 422.894 298.189 412.411 232.261 411.744C157.11 410.983 96.4665 497.286 69.5054 460.341C42.5626 423.421 131.331 353.691 142.188 307.763C153.815 258.57 80.3195 211.444 143.554 168.352C207.502 124.772 308.836 144.702 393.853 136.258C451.753 130.508 505.041 127.439 561.017 126.892C633.932 126.181 722.543 107.853 770.199 132.586C820.284 158.581 827.018 208.271 808.287 255.226C790.096 300.826 734.332 344.902 670.909 381.481C613.813 414.411 519.967 387.816 450.564 405.405Z"
          fill="#A6FFFF"
          fillOpacity="0.3"
        />
        <foreignObject
          className={classes.cssHeaderText}
          x="160"
          y="155"
          width="174"
          height="39"
        >
          Why tech?
        </foreignObject>

        <foreignObject
          className={classes.cssUnderline}
          x="160"
          y="155"
          width="130"
          height="39"
        />

        <foreignObject
          className={classes.cssBodyText}
          x="160"
          y="210"
          width="600"
          height="200"
        >
          Our world is increasingly driven by technology -- it’s all around us,
          and it changes how we interact with the world and each other.
          Technical literacy is widely considered one of the most important 21st
          century skills, and it is a passport into participation in the modern
          economy. Tech skills are consistently one of the most in-demand skill
          sets.
        </foreignObject>
      </svg>
    </div>
  );
}
