import React, { JSX } from 'react';

interface ColumnProps {
    children: React.ReactNode | React.ReactNode[];
}

function Column({children}: ColumnProps): JSX.Element {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            {children}
        </div>
    );
}

export default Column;
