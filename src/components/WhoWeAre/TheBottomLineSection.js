import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import GridContainer from '../GridContainer/GridContainer';
import TextBox from '../TextBox/TextBox';
import Title from '../SectionTitle/Title';
import PContent from '../DecoratedText/DecoratedText';
import Question from '../BoldedHeaderText/BoldedHeader';
import ContactButton from '../Button/ContactButton';
import { ReactComponent as People } from '../../images/about-us/bottom-line/people.svg';
import SVGLoad from '../SVGLoad/SVG';
import { ReactComponent as CheetoLeft } from '../../images/cheetohs/cheetohLeft.svg';
import { ReactComponent as CheetoRight } from '../../images/cheetohs/cheetohRight.svg';
import { useStyles } from '../Cheetos/cheetohStyle';

export default function TheBottomLineSection() {
  const classes = useStyles();
  const title = 'The bottom line';
  const content = "If you’re facing housing precarity in Toronto and want to learn 'tech' skills, we want to help you. Free of charge.";
  const question = 'Not sure if you qualify?';
  const buttonText = 'Contact Us';

  return (
    <GridContainer>
      <Grid item xs={12} sm={6}>
        <TextBox
          style={{
            'padding-left': 'calc(18.3vw - 41px)',
            'padding-right': 'calc(-2.31vw + 33.3px)',
            'text-align': 'left',
          }}
        >
          <Hidden xsDown>
            <Title title={title} hideCheetohs={['lg', 'md']} />
            <CheetoRight
              className={classes.cheetohRight}
              style={{ 'margin-top': '-2em' }}
              alt="cheetohRight"
            />
            <PContent
              content={content}
              style={{ 'text-align': 'left' }}
              hideCheetohs={['sm', 'xs']}
            />
            <CheetoLeft
              className={classes.cheetohLeft}
              style={{ 'margin-left': '-2.5em', 'margin-top': '0.1em' }}
              alt="cheetohLeft"
            />
          </Hidden>
          <Hidden smUp>
            <CheetoLeft
              className={classes.cheetohLeft}
              style={{
                'margin-right': '-3em',
                'margin-top': '0.5em',
                'margin-left': '2em',
                transform: 'rotate(0deg)',
              }}
              alt="cheetohLeft"
            />
            <Title
              title={title}
              style={{ 'text-align': 'center', 'margin-top': '64px' }}
              hideCheetohs={['lg', 'md']}
            />
            <CheetoRight
              className={classes.cheetohRight}
              style={{
                'margin-right': '2em',
                'margin-top': '-3em',
                transform: 'rotate(0deg)',
              }}
              alt="cheetohRight"
            />
            <PContent
              content={content}
              style={{ 'margin-bottom': '-2em' }}
              hideCheetohs={['sm', 'xs']}
            />
          </Hidden>
          <Hidden xsDown>
            <Question headerText={question} style={{ 'font-size': '18px' }} />
            <ContactButton
              buttonText={buttonText}
              style={{ 'margin-top': '0' }}
            />
          </Hidden>
        </TextBox>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SVGLoad image={People} alt="peopleSVG" />
        <Hidden smUp>
          <Question
            headerText={question}
            style={{ 'text-align': 'center', 'margin-top': '-2em' }}
          />
          <ContactButton buttonText={buttonText} />
        </Hidden>
      </Grid>
    </GridContainer>
  );
}
