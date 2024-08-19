// Use the `CardWrapper` component to create a stylized container for your content.
// It allows for custom styles and can handle click events. You can also place custom
// elements in the top-right corner for additional interactivity, such as dropdown menus
// or action icons.

import React from 'react';

interface CardWrapperProps {
  id: string;
  children: React.ReactNode;
  topRightContent?: React.ReactNode | (() => React.ReactNode);
  padding?: string;
  margin?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: number;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ id, children, topRightContent, padding, margin, bgColor = 'none', border, borderRadius, onClick, className, style: userStyle }) => {
  const style: React.CSSProperties = {
    padding: padding ? padding : undefined,
    margin: margin ? margin : undefined,
    backgroundColor: bgColor,
    border: border ? border : undefined,
    borderRadius: borderRadius ? `${borderRadius}px` : undefined,
    cursor: onClick ? 'pointer' : undefined,
    overflow: 'hidden',
    position: 'relative',
    ...userStyle,
  };

  const topRightStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
  };

  const renderTopRightContent = () => {
    if (typeof topRightContent === 'function') {
      return topRightContent();
    }
    return topRightContent;
  };

  return (
    <div id={id} className={`card-wrapper ${className || ''}`} style={style} onClick={onClick} role={onClick ? 'button' : undefined}>
      {topRightContent && <div style={topRightStyle}>{renderTopRightContent()}</div>}
      {children}
    </div>
  );
};

export default React.memo(CardWrapper);