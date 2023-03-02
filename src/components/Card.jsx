import { useEffect } from 'react';
import { LikeIcon } from './Icons'

function Card({ image, showPopup }) {
    return <div onClick={() => showPopup(image.id)} className="min-h-[250px] mb-1 cursor-pointer rounded-md overflow-hidden md:mb-5">
        <img src={`${window.innerWidth >= 768 ? image.urls.small : image.urls.thumb}`} loading="lazy" className="w-full object-contain" />
        <div className="flex gap-2 p-2 justify-between border-[1px] dark:bg-black border-gray-200 dark:border-none rounded-b-md">
          <div className="flex gap-1 md:gap-2 align-middle">
            {/* userpicture, name, username */}
            <div className="m-auto overflow-hidden">
              <img src={`${image.user.profile_image.small}`} className="rounded-full" />
            </div>
            <div className="m-auto">
              <p className="text-[0.75rem] font-semibold dark:text-white">{image.user.name}</p>
              <p className="text-[0.75rem] text-gray-500 font-medium dark:text-gray-200">@{image.user.username}</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div className='w-3 md:w-4 m-auto'>
              <LikeIcon />
            </div>
            <p className='m-auto dark:text-white'>{image.likes}</p>
          </div>
        </div>
    </div>
}

export default Card;
