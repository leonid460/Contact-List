import React from 'react';
import { makeColorFromString } from 'utils/makeColorFromString';
import { invertColor } from 'utils/invertColor';
import AvatarWrapper from './__styled-components/AvatarWrapper';


const Avatar = ({ className, children }: {
  className?: string;
  children: React.ReactText;
}) => {
  const text = children.toString();
  const backgroundColor = makeColorFromString(text);
  const textColor = invertColor(backgroundColor);

  return (
    <AvatarWrapper className={className} textColor={textColor} backgroundColor={backgroundColor}>
      {text.slice(0, 2).toUpperCase()}
    </AvatarWrapper>
  )
};


export default Avatar;