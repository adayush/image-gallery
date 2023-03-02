import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Loading from "./Loading";
import Card from "./Card";
import Popup from "./Popup";

function Gallery({ imageData, tagSearch }) {
  // const [showPopup, setShowPopup] = useState(false);
  const [popupImageId, setPopupImageId] = useState();

  let data;
  if (imageData && imageData.results !== undefined) {
    data = imageData.results;
  } else {
    data = imageData;
  }

  function showPopup(id) {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
    setPopupImageId(id);
  }

  function closePopup() {
    setPopupImageId(null);

    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "0";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  if (!imageData) {
    return <Loading />;
  }

  return (
    <main className="mx-auto my-2 md:my-4 p-5 md:max-w-6xl">
      <ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 350: 2, 768: 3 }}>
        <Masonry gutter="0.75rem">
          {data?.map((image) => {
            console.log()
            return (
              <Card
                image={image}
                key={image.id}
                showPopup={showPopup}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      {popupImageId && <Popup imageId={popupImageId} closePopup={closePopup} tagSearch={tagSearch} />}
    </main>
  );
}

export default Gallery;
