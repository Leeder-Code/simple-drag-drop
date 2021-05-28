import React from 'react';

const Card = ({children, id, className, draggable}) => {
    const onDragStart = e =>{
        const target = e.target

        target.classList.add('dragging')
        
    }
    const onDragEnd = e =>{
        const target = e.target
        target.classList.remove('dragging')
    }
    const onDragOver = e =>{
        e.preventDefault();
        e.stopPropagation();
    }
    return ( 
        <div
        id={id}
        className={className}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        >
            {children}
        </div>
     );
}
 
export default Card;