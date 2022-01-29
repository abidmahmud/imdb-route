import React, { useState } from 'react';

const Rating = (props) => {
    const { handleToggleRating, rank } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    }

    const handleOut = () => {
        setIsHovered(false);
    }

    const getClassName = () => {
        const { isRated } = props;
        let className = isRated ? "bi bi-star-fill" : "bi bi-star";
        className += isHovered ? " text-primary " : " ";
        return className;
    }

    return (
        <>
            <i
                onClick={() => handleToggleRating(rank)}
                onMouseOver={handleHover}
                onMouseOut={handleOut}
                className={getClassName()}
            ></i>
        </>
    );

}

export default Rating;

