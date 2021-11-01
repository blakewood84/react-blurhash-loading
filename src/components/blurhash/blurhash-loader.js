import { useState, useCallback } from "react"
import { Blurhash } from "react-blurhash"


export const BlurHashLoader = ({ imageUrl }) => {
    
    const [opacity, setOpacity] = useState(0)

    const handleImageLoaded = () => {
        setOpacity(1)
    }

    const handleImageError = () => {
        console.log('This image has failed to Load')
    }

    return (
        <div
            style={{
                height: '200px', 
                width: '360px',
                position: 'relative'
            }} 
            className="backdrop"
        >
            
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <Blurhash
                    hash="LhIg+c-$acjbBa$yobX84|ESaekB"
                    width={'100%'}
                    height={'100%'}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            <div style={{position: 'absolute', top: 0, width: '100%', height: '100%'}}>
                <img 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        opacity: opacity, 
                        transition: '2s all ease-in-out'
                    }} 
                    src={imageUrl} 
                    onLoad={handleImageLoaded} 
                    onError={handleImageError} 
                />
            </div>
        </div>
    )
}