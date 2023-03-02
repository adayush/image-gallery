import { useEffect, useState } from "react";
import useGetPhoto from "../hooks/useGetPhoto";
import { CrossIcon, LikeIcon } from "./Icons";

function Popup({ imageId, closePopup, tagSearch }) {
  const [imageData, setImageData] = useState();

  useEffect(() => {
    useGetPhoto(imageId, setImageData);
  }, [imageId]);

  if (!imageData) {
    return (
      <div
        onClick={closePopup}
        className="fixed z-50 w-full h-full top-0 left-0 backdrop-brightness-50"
      ></div>
    );
  }

  return (
    <div
      onClick={(e) => {
        if (e.target.id === "popup-container") closePopup()
      }}
      id="popup-container"
      className="fixed flex z-50 w-full h-full top-0 left-0 backdrop-brightness-50 overflow-y-scroll"
    >
      <div className="m-auto py-5 w-[85%] md:max-w-2xl">
        <div className="relative">
          {/* Image box */}
          <img
            src={`${imageData.urls.regular}`}
            className="w-full object-contain rounded-t-md"
            alt={imageData.alt_description}
          />
          <div
            onClick={closePopup}
            className="absolute -top-3 -right-3 bg-white -mb-4 p-2 rounded-full"
          >
            <CrossIcon />
          </div>
          <div className="absolute bottom-0 w-full flex justify-between">
            <a href={imageData.links.download} target="_blank">
              <div className="m-2 px-4 py-2 backdrop-brightness-50 rounded text-sm text-white font-bold">
                Share
              </div>
            </a>
            <a href={imageData.links.download} target="_blank">
              <div className="m-2 px-4 py-2 bg-green-500 rounded text-sm text-white font-bold">
                Download Image
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2 bg-white rounded-b-md">
          {/* description box */}
          <div className="flex p-2 justify-between">
            <a
              href={`https://unsplash.com/@${imageData.user.username}`}
              target="_blank"
            >
              <div className="flex gap-1 md:gap-2 align-middle">
                {/* userpicture, name, username */}
                <div className="m-auto overflow-hidden">
                  <img
                    src={`${imageData.user.profile_image.small}`}
                    className="rounded-full"
                  />
                </div>
                <div className="m-auto">
                  <p className="text-[0.75rem] font-semibold">
                    {imageData.user.name}
                  </p>
                  <p className="text-[0.75rem] text-gray-500 font-medium">
                    @{imageData.user.username}
                  </p>
                </div>
              </div>
            </a>
            <div className="flex gap-1">
              <div className="w-3 md:w-4 m-auto">
                <LikeIcon />
              </div>
              <p className="m-auto">{imageData.likes}</p>
            </div>
          </div>
          <div className="px-2">
            {/* Related Tags */}
            <p className="text-sm font-semibold">Related Tags</p>
            <div className="flex mt-2 mb-4 gap-2 flex-wrap">
              {imageData.tags.map((tag, i) => (
                <button
                  onClick={() => {
                    tagSearch(tag.title);
                    closePopup();
                  }}
                  key={i}
                  className="px-2 py-1 text-sm rounded-sm bg-gray-200 inline-block"
                >
                  {tag.title.charAt(0).toUpperCase()}
                  {tag.title.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
