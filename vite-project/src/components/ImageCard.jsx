import React from 'react'

const ImageCard = ({ image}) => {
    return (
    <div>
        <div>
        <img
            src={image.url}
            alt={image.title}/>
        </div>
        <div>
        <h3>{image.title}</h3>
        <p>ID: {image.id}</p>
        </div>
    </div>
    )
}

export default ImageCard