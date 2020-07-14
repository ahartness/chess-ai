import React from 'react';

export interface BoardProps {
    title?: string;
}

export const Board: React.FC<BoardProps> = ({
    title = '',
}: BoardProps ) => {
    return (
        <>
        
        </>
    );
}