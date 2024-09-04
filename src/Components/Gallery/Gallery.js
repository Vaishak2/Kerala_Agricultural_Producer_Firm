import React, { useState } from 'react';
import './Gallery.css';
import image1 from '../../Assets/album 1/Rectangle 3867.png'
import image2 from '../../Assets/album 1/Rectangle 3866.png'
import image3 from '../../Assets/album 1/Rectangle 38681.png'
import image4 from '../../Assets/album 1/Rectangle 3869.png'
import image5 from '../../Assets/album 2/Rectangle 3870.png'
import image6 from '../../Assets/album 2/Rectangle 3871.png'
import image7 from '../../Assets/album 2/Rectangle 3872.png'
import image8 from '../../Assets/album 3/Rectangle 3873.png'
import image9 from '../../Assets/album 3/Rectangle 3874.png'
import image10 from '../../Assets/album 4/Rectangle 3875.png'
import image11 from '../../Assets/album 4/Rectangle 3876.png'
import image12 from '../../Assets/album 5/Rectangle 3877.png'

const albums = {
    album1: [
        image1,
        image2,
        image3,
        image4,
    ],
    album2: [
        image5,
        image6,
        image7,
    ],
    album3: [
        image8,
        image9,
        image3,
        image4,
    ],
    album4: [
        image10,
        image11,
        image3,
    ],
    album5: [
        image12,
        image2,
        image3,
    ],
    // Add more albums as needed
};

// const Gallery = () => {
//     const [currentAlbum, setCurrentAlbum] = useState('album1');
//     const [animate, setAnimate] = useState(false);

//     const handleAlbumChange = (album) => {
//         setAnimate(true);
//         setTimeout(() => {
//             setCurrentAlbum(album);
//             setAnimate(false);
//         }, 500); // Animation duration in ms
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold text-center mb-4">Gallery</h1>
//             <div className="flex justify-center space-x-4 mb-4 ">
//                 <div className='flex justify-center space-x-4 rounded-full bg-white p-2'>
//                     {Object.keys(albums).map((album, index) => (
//                         <button
//                             key={index}
//                             onClick={() => handleAlbumChange(album)}
//                             className={`px-4 py-2 rounded-full transition-colors duration-300 ${currentAlbum === album
//                                 ? 'bg-gray-800 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-gray-200'
//                                 }`}
//                         >
//                             {`Album ${index + 1}`}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//             <div
//                 className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'
//                     }`}
//             >
//                 {albums[currentAlbum].map((image, index) => (
//                     <div>
//                         <img
//                             key={index}
//                             src={image}
//                             alt={`Album ${currentAlbum} - Image ${index + 1}`}
//                             className="w-full h-auto rounded-lg"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Gallery;

const Gallery = () => {
    const [currentAlbum, setCurrentAlbum] = useState(Object.keys(albums)[0]);
    const [animateOut, setAnimateOut] = useState(false);

    const handleAlbumChange = (album) => {
        if (album !== currentAlbum) {
            setAnimateOut(true); // Trigger the exit animation
            setTimeout(() => {
                setCurrentAlbum(album);
                setAnimateOut(false); // Reset animation for the new album
            }, 500); // Match the duration of the transition
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center space-x-4 mb-4">
                <div className='flex justify-center space-x-4 rounded-full bg-white p-2'>
                    {Object.keys(albums).map((album, index) => (
                        <button
                            key={index}
                            onClick={() => handleAlbumChange(album)}
                            className={`px-4 py-2 rounded-full ${currentAlbum === album ? 'bg-gray-800 text-white' : 'bg-white text-black'
                                }`}
                        >
                            {`Album ${index + 1}`}
                        </button>
                    ))}
                </div>
            </div>

            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-500 ${animateOut ? 'gallery-exit' : 'gallery-enter'
                    }`}
            >
                {albums[currentAlbum].map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img
                            src={image}
                            alt={`Album ${currentAlbum} - Image ${index + 1}`}
                            className="w-full h-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;