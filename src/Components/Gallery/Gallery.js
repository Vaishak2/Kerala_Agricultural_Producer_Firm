// import React, { useRef, useState } from 'react';
// import './Gallery.css';
// import image1 from '../../Assets/album 1/Rectangle 3867.png'
// import image2 from '../../Assets/album 1/Rectangle 3866.png'
// import image3 from '../../Assets/album 1/Rectangle 38681.png'
// import image4 from '../../Assets/album 1/Rectangle 3869.png'
// import image5 from '../../Assets/album 2/Rectangle 3870.png'
// import image6 from '../../Assets/album 2/Rectangle 3871.png'
// import image7 from '../../Assets/album 2/Rectangle 3872.png'
// import image8 from '../../Assets/album 3/Rectangle 3873.png'
// import image9 from '../../Assets/album 3/Rectangle 3874.png'
// import image10 from '../../Assets/album 4/Rectangle 3875.png'
// import image11 from '../../Assets/album 4/Rectangle 3876.png'
// import image12 from '../../Assets/album 5/Rectangle 3877.png'

// const albums = {
//     album1: [
//         image1,
//         image2,
//         image3,
//         image4,
//     ],
//     album2: [
//         image5,
//         image6,
//         image7,
//     ],
//     album3: [
//         image8,
//         image9,
//         image3,
//         image4,
//     ],
//     album4: [
//         image10,
//         image11,
//         image3,
//     ],
//     album5: [
//         image12,
//         image2,
//         image3,
//     ],
//     // Add more albums as needed
// };

// const Gallery = () => {
//     const [currentAlbum, setCurrentAlbum] = useState(Object.keys(albums)[0]);
//     const [animateOut, setAnimateOut] = useState(false);
//     const albumContainerRef = useRef(null);


//     const handleAlbumChange = (album) => {
//         if (album !== currentAlbum) {
//             setAnimateOut(true); // Trigger the exit animation
//             setTimeout(() => {
//                 setCurrentAlbum(album);
//                 setAnimateOut(false); // Reset animation for the new album
//             }, 500); // Match the duration of the transition
//         }
//     };


//     const handleAlbumClick = (album, index) => {
//         handleAlbumChange(album);
//         // Scroll to the selected album
//         const albumButton = document.getElementById(`album-button-${index}`);
//         if (albumButton) {
//             albumButton.scrollIntoView({ behavior: 'smooth', inline: 'center' });
//         }
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <div className="flex justify-center mb-4">
//                 {/* For web view: center-aligned, flex */}
//                 <div className="hidden md:flex justify-center space-x-4 rounded-full bg-white p-2">
//                     {Object.keys(albums).map((album, index) => (
//                         <button
//                             key={index}
//                             onClick={() => handleAlbumChange(album)}
//                             className={`px-4 py-2 rounded-full ${currentAlbum === album ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
//                         >
//                             {`Album ${index + 1}`}
//                         </button>
//                     ))}
//                 </div>

//                 {/* For mobile view: horizontally scrollable */}
//                 <div className="flex md:hidden my-24  overflow-x-auto space-x-4 rounded-full bg-white p-2">
//                     {Object.keys(albums).map((album, index) => (
//                         <button
//                             key={index}
//                             onClick={() => handleAlbumChange(album)}
//                             className={`px-36 py-6 text-5xl whitespace-nowrap rounded-full ${currentAlbum === album ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
//                         >
//                             {`Album ${index + 1}`}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             <div
//                 className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-500 ${animateOut ? 'gallery-exit' : 'gallery-enter'
//                     }`}
//             >
//                 {albums[currentAlbum].map((image, index) => (
//                     <div key={index} className="gallery-item">
//                         <img
//                             src={image}
//                             alt={`Album ${currentAlbum} - Image ${index + 1}`}
//                             className="w-full h-auto"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Gallery;


import React, { useRef, useState } from 'react';
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
    album1: [image1, image2, image3, image4],
    album2: [image5, image6, image7],
    album3: [image8, image9, image3, image4],
    album4: [image10, image11, image3],
    album5: [image12, image2, image3],
};

const Gallery = () => {
    const [currentAlbum, setCurrentAlbum] = useState(Object.keys(albums)[0]);
    const [animateOut, setAnimateOut] = useState(false);
    const albumContainerRef = useRef(null); // Ref for the album container

    const handleAlbumChange = (album, index) => {
        if (album !== currentAlbum) {
            setAnimateOut(true); // Trigger the exit animation
            setTimeout(() => {
                setCurrentAlbum(album);
                setAnimateOut(false); // Reset animation for the new album
            }, 500); // Match the duration of the transition

            // Scroll the album into view horizontally (center it or move it left)
            const albumButton = document.getElementById(`album-button-${index}`);
            // if (albumButton && albumContainerRef.current) {
                const container = albumContainerRef.current;
                const buttonOffsetLeft = albumButton.offsetLeft;
                const buttonWidth = albumButton.offsetWidth;
                const containerWidth = container.offsetWidth;

                // Calculate the center position
                const scrollPosition = buttonOffsetLeft - (containerWidth / 2) + (buttonWidth / 2);
                container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
            // }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className='my-9 text-5xl font-normal text-center'> Gallery</div>
            <div className="flex justify-center mb-8">
                {/* For mobile view: horizontally scrollable */}
                <div
                    className="flex md:hidden space-x-4 my-16 rounded-full bg-white p-2 overflow-x-auto scrollbar-hide"
                    ref={albumContainerRef} // Reference to the album button container
                >
                    {Object.keys(albums).map((album, index) => (
                        <button
                            key={index}
                            id={`album-button-${index}`}
                            onClick={() => handleAlbumChange(album, index)}
                            className={`px-6 py-2 text-2xl whitespace-nowrap rounded-full ${currentAlbum === album ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                        >
                            {`Album ${index + 1}`}
                        </button>
                    ))}
                </div>

                {/* For web view: horizontally scrollable */}
                <div
                    className="md:flex hidden space-x-4 overflow-x-auto p-2 rounded-full bg-white scrollbar-hide"
                    ref={albumContainerRef} // Reference to the album button container
                >
                    {Object.keys(albums).map((album, index) => (
                        <button
                            key={index}
                            id={`album-button-${index}`}
                            onClick={() => handleAlbumChange(album, index)}
                            className={` px-4 py-2  whitespace-nowrap rounded-full ${currentAlbum === album ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                        >
                            {`Album ${index + 1}`}
                        </button>
                    ))}
                </div>
            </div>

            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-500 ${animateOut ? 'gallery-exit' : 'gallery-enter'}`}
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

