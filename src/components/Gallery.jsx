import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Loading from "./Loading";
import Card from "./Card";
import Popup from "./Popup";

function Gallery({ imageData }) {
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
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  if (!imageData) {
    return <Loading />;
  }

  return (
    <main className="mx-auto my-2 md:my-4 p-5 md:max-w-6xl">
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 768: 3 }}>
        <Masonry gutter="0.75rem">
          {data?.map((image, i) => {
            return (
              <Card
                key={image.id}
                name={image.user.name}
                username={image.user.username}
                profileImage={image.user.profile_image.small}
                likes={image.likes}
                url={image.urls.small}
                onClick={() => showPopup(image.id)}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      {popupImageId && <Popup imageId={popupImageId} closePopup={closePopup} />}
    </main>
  );

  // return (
  //   <main className="mx-auto my-2 md:my-4 columns-2 gap-2 p-5 md:columns-3 md:max-w-6xl md:gap-5">
  //     {data?.map((image, i) => {
  //       return (
  //       <Card
  //         key={image.id}
  //         name={image.user.name}
  //         username={image.user.username}
  //         profileImage={image.user.profile_image.small}
  //         likes={image.likes}
  //         url={image.urls.small}
  //         onClick={() => showPopup(image.id)}
  //       />
  //     )})}
  //     {popupImageId && <Popup imageId={popupImageId} closePopup={closePopup} />}
  //   </main>
  // );
}

export default Gallery;

// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(180px,1fr));
// column-gap: 5px;
