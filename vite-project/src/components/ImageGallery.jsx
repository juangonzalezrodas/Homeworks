import React, { useState, useEffect } from 'react'
import SearchFilter from './SearchFilter'
import AddImageForm from './AddImageForm'
import ImageCard from './ImageCard'

const ImageGallery = () => {
    const [images, setImages] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredImages, setFilteredImages] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
    if (searchTerm === '') {
    setFilteredImages(images)
    } else {
        const filtered = images.filter(image =>
        image.title.includes(searchTerm)
        )
        setFilteredImages(filtered)
    }
    }, [images, searchTerm])

    const addImage = async (title, id) => {
    if (!title || !id) {
        throw new Error('Completa todos los campos')
    }

    const imageId = parseInt(id);
    if (isNaN(imageId) || imageId <= 0) {
            throw new Error('ID debe ser un número positivo')
    }

    if (images.some(img => img.id === imageId)) {
        throw new Error('Ya existe una imagen con este ID')
    }

    setIsLoading(true);

    try {
        const imageUrl = `https://picsum.photos/id/${imageId}/200/300`;
        const img = new Image();
        await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
        })

        const newImage = {
        id: imageId,
        title: title.trim(),
        url: imageUrl
        }

        setImages(prev => [...prev, newImage])
    } catch (error) {
        throw new Error('No se pudo cargar la imagen con este ID')
    } finally {
        setIsLoading(false)
    }
    }

    const removeImage = (imageId) => {
    setImages(prev => prev.filter(img => img.id !== imageId))
    }

    const updateSearchTerm = (term) => {
    setSearchTerm(term)
    }

    const clearSearch = () => {
    setSearchTerm('')
    }

    return (
    <div>
        <h1>Galería de Imágenes</h1>
        <div>
        <div>
            <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={updateSearchTerm}
            onClearSearch={clearSearch}/>
            <button
            onClick={() => setShowAddForm(!showAddForm)}>
            Agregar Imagen</button>
        </div>
        
        {searchTerm && (
            <p>
            Mostrando {filteredImages.length} de {images.length} imágenes</p>
        )}
        </div>

        {showAddForm && (
        <AddImageForm
            onAddImage={addImage}
            isLoading={isLoading}
            onCancel={() => setShowAddForm(false)}/>
        )}

        <div>
        {filteredImages.length === 0 ? (
            <div>
            <h3>
                {images.length === 0 ? 'No hay imágenes' : 'No se encontraron imágenes'}
            </h3>
            <p>
                {images.length === 0 
                ? 'Agrega tu primera imagen'
                : 'Intenta con otros términos de búsqueda'
                }
            </p>
        </div>
        ) : (
            <div>
            {filteredImages.map((image) => (
            <ImageCard
                key={image.id}
                image={image}
                onRemove={removeImage}/>
            ))}
            </div>
        )}
        </div>
    </div>
    );
};

export default ImageGallery