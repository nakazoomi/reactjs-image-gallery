const ShowImage = ({
  imageOriginal,
  setImageThumbnail,
  showNextImage,
  showPreviousImage,
}) => {
  const handelClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setImageThumbnail(null);
    }
  };

  return (
    <>
      <div className="gallery__overlay dismiss" onClick={handelClick}>
        <img src={imageOriginal} alt="bigger picture" />

        <div className="close-btn dismiss" onClick={handelClick}>
          <img
            src="./icons/close-icon.svg"
            alt="Close Icon"
            onClick={handelClick}
            className="dismiss"
          />
        </div>

        <div onClick={showNextImage} className="overlay-arrows_right">
          <img src="./icons/arrow-right.svg" alt="Arrow Right" />
        </div>

        <div onClick={showPreviousImage} className="overlay-arrows_left">
          <img src="./icons/arrow-left.svg" alt="Arrow Left" />
        </div>
      </div>
    </>
  );
};

export default ShowImage;
