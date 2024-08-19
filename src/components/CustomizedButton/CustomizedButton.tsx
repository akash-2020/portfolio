import React from 'react';
import './customizedButton.css';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: number;
  padding?: string;
  margin?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'contained' | 'outlined';
}

const CustomizedButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  color,
  backgroundColor,
  border,
  borderRadius = 4,
  padding,
  margin,
  className,
  style: userStyle,
  disabled = false,
  loading = false,
  variant,
}) => {
  const style: React.CSSProperties = {
    color,
    backgroundColor,
    border,
    borderRadius: `${borderRadius}px`,
    padding,
    margin,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...userStyle,
  };

  return (
    <button
      onClick={onClick}
      className={`custom-button ${variant || ''} ${className || ''}`}
      style={style}
      disabled={disabled || loading}
    >
      {loading && (
        <div className="loading-spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      )}
      {children}
    </button>
  );
};

export default React.memo(CustomizedButton);