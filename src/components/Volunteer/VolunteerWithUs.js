import React from 'react';

import BoldedHeader from '../BoldedHeaderText/BoldedHeader';
import TextBox from '../TextBox/TextBox';
import Content from '../DecoratedText/DecoratedText';
import { ReactComponent as CheetoLeft } from '../../images/cheetohs/cheetohLeft.svg';
import { ReactComponent as CheetoRight } from '../../images/cheetohs/cheetohRight.svg';
import { useStyles } from '../Cheetos/cheetohStyle';
import { SkylineHeader as SkylineHeaderSVG } from '../SkylineSVG';

export default function VolunteerWithUs() {
  const cheetohclasses = useStyles();
  const headerText = 'Volunteer With Us';
  const content = 'Toronto Tech Mentoring is a group of dedicated volunteers who want to help vulnerable young people access tech skills. Our volunteer team comes from a wide range of backgrounds, bringing a myriad of different life experiences and skill sets. ';

  return (
    <div>
      <CheetoLeft
        className={cheetohclasses.cheetohLeftMirrored}
        style={{ marginTop: '-1em' }}
        alt="cheetohLeft"
      />
      <TextBox
        style={{
          marginTop: '135px',
          marginRight: 'calc(37vw - 138px)',
          paddingRight: '0',
        }}
      >
        <BoldedHeader
          headerText={headerText}
          style={{ fontSize: 'calc(1.3vw + 1em)' }}
        />
        <Content
          content={content}
          style={{ textAlign: 'left', marginTop: '-5px' }}
        />
        <CheetoRight
          className={cheetohclasses.cheetohRightMirrored}
          style={{ marginTop: 'calc(1vh + 1px)', marginRight: 'auto' }}
          alt="cheetohRight"
        />
      </TextBox>
      <SkylineHeaderSVG />
    </div>
  );
}
