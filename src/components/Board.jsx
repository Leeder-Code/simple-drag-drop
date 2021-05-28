import React from 'react';


const Board = ({children, id, className}) => {
    const onDragOver = e =>{
        e.preventDefault();
        const afterElement = getDragAfterElement(e.target, e.clientY)
        const draggable = document.querySelector('.dragging')
        if(afterElement == null){
            e.target.appendChild(draggable)
        }else{
            e.target.insertBefore(draggable, afterElement)
        }
    }

    const getDragAfterElement = (container, y) => {
        const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')]
        return draggableElements.reduce((closest, child) =>{
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            if(offset < 0 && offset > closest.offset){
                return {offset: offset, element: child}
            }else{
                return closest
            }
        }, {offset: Number.NEGATIVE_INFINITY }).element
    }

    return ( 
        <div 
        id={id}
        onDragOver={onDragOver}
        className={className}
        >
            {children}
        </div>
     );
}
 
export default Board;