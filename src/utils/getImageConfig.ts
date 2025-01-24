export interface ImageConfig {
    aspectRatio: string;
    objectFit: 'cover' | 'contain';
    padding: string;
    maxHeight: string;
}

export function getImageConfig(imageUrl: string): ImageConfig {
    const config: ImageConfig = {
        aspectRatio: '56.25%',  // 16:9 ratio
        objectFit: 'contain',   // Default to contain for all images
        padding: '0',
        maxHeight: '300px'
    };

    const extension = imageUrl.split('.').pop()?.toLowerCase();

    // All images use contain to maintain aspect ratio
    switch(extension) {
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'webp':
            config.objectFit = 'contain';
            break;
    }

    // Special handling for logos
    if (imageUrl.includes('logo')) {
        config.padding = '2rem';
    }

    return config;
}