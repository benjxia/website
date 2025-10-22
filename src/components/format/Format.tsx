import React, { JSX } from 'react';

interface ColumnProps {
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
}

function Column({ children }: ColumnProps): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}

function Row({ style, children }: ColumnProps): JSX.Element {
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
      }}
    >
      {children}
    </div>
  );
}

export { Column, Row };
