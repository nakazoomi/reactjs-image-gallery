import { useState } from 'react';
import data from '../data/images.json';
import ShowImage from './ShowImage.jsx';

function ImageGallery() {
  const [imageThumbnail, setImageThumbnail] = useState(null);
  const [imageOriginal, setImageOriginal] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handelClick = (item, index) => {
    setCurrentIndex(index);
    setImageThumbnail(item.imageThumbnail);
    setImageOriginal(item.imageOriginal);
  };

  // HIDE SCROLL BAR WHEN POPUP IS OPEN
  if (typeof window === 'object') {
    // Check if document is finally loaded
    document.addEventListener('DOMContentLoaded', function () {});
    if (imageThumbnail) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }

  // SHOW NEXT IMAGE
  const showNextImage = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newImage = data.data[0].imageOriginal;
      setImageOriginal(newImage);
      return;
    }
    const newIndex = currentIndex + 1;
    const newImage = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newImage[0].imageOriginal;
    setImageOriginal(newItem);
    setCurrentIndex(newIndex);
  };

  // SHOW PREVIOUS IMAGE
  const showPreviousImage = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newImage = data.data[totalLength - 1].imageOriginal;
      setImageOriginal(newImage);
      return;
    }
    const newIndex = currentIndex - 1;
    const newImage = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newImage[0].imageOriginal;
    setImageOriginal(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="gallery__container">
        <div className="gallery__wrapper">
          <div className="gallery-flex">
            {data.data.map((item, index) => (
              <div key={index} className="gallery-img">
                <img
                  src={item.imageThumbnail}
                  alt={item.description}
                  onClick={() => handelClick(item, index)}
                />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          {/* OPEN IMAGE IN FULLSCREEN MODE */}
          {imageThumbnail && (
            <ShowImage
              imageThumbnail={imageThumbnail}
              setImageThumbnail={setImageThumbnail}
              imageOriginal={imageOriginal}
              setImageOriginal={setImageOriginal}
              showNextImage={showNextImage}
              showPreviousImage={showPreviousImage}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
