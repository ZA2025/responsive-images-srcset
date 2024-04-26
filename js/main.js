import responsiveImgAttrs2 from './responsiveImgAttrs2.js';
import { springArray } from './arrays.js';
import { dogsArray } from './arrays.js';

// Function to add images to the DOM
const appendImage = (image, container) => {
    const imgElement = document.createElement('img');
    const defaultDimension = image.dimensions.find(dimension => dimension.default === true);

    imgElement.src = image.src;
    imgElement.srcset = image.srcset;
    imgElement.sizes = image.sizes;
    imgElement.alt = image.alt;
    imgElement.classList.add(image.class);

    if (defaultDimension) {
        imgElement.width = defaultDimension.width;
        imgElement.height = defaultDimension.height;
    }
    container.appendChild(imgElement);
};

// Define albums
const albums = [
    // Album with 1 column
    responsiveImgAttrs2(
        springArray.map(src => `placeholders/${src}`),
        "(min-width: 1200px) 1200px, calc(100vw - 40px), (min-width: 768px) calc(768px - 40px), calc(100vw - 40px)",
        [600, 800, 1200, 1600],
        800,
        "imageSpring",
        "the alt description",
        [400, 534, 800, 1067]
    ),
    // Album with 2 columns
    responsiveImgAttrs2(
        springArray.map(src => `placeholders/${src}`),
        "(min-width: 1600px) 285px, (min-width: 1200px) calc((1200px - 20px) / 2), (min-width: 768px) calc(((768px - 40px) - 20px) / 2), calc(((100vw - 40px) - 20px) / 2)",
        [600, 800, 1200, 1600],
        800,
        "imageSpring",
        "the alt description",
        [400, 534, 800, 1067]
    ),

    // Album with 3 columns
    responsiveImgAttrs2(
        springArray.map(src => `placeholders/${src}`),
        "(min-width: 1600px) 386px, (min-width: 1200px) calc((1200px - 40px) / 3), (min-width: 768px) calc(((768px - 40px) - 40px) / 3), calc(((100vw - 40px) - 20px) / 2)",
        [600, 800, 1200, 1600],
        800,
        "imageSpring",
        "the alt description",
        [400, 534, 800, 1067]
    ),

    // Album with 4 columns
    responsiveImgAttrs2(
        springArray.map(src => `placeholders/${src}`),
        "(min-width: 1600px) 285px, (min-width: 1200px) calc((1200px - 60px) / 4), (min-width: 768px) calc(((768px - 40px) - 60px) / 4), calc(((100vw - 40px) - 20px) / 2)",
        [600, 800, 1200, 1600],
        800,
        "imageSpring",
        "the alt description",
        [400, 534, 800, 1067]
    ),
    // Album for dogs
    responsiveImgAttrs2(
        dogsArray.map(src => `placeholders/${src}`),
        "(min-width: 1600px) 285px, (min-width: 1200px) calc((1200px - 60px) / 4), (min-width: 768px) calc(((768px - 40px) - 60px) / 4), calc(((100vw - 40px) - 20px) / 2)",
        [600, 800, 1200, 1600],
        800,
        "imageSpring",
        "the alt description",
        [400, 534, 800, 1067]
    )
];

// Append images to respective containers
albums.forEach((album, index) => {
    const container = document.querySelectorAll(`.imageItem${index + 1}`);
    container.forEach(div => {
        appendImage(album, div);
    });
});
