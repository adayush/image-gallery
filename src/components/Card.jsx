import { LikeIcon } from './Icons'

function Card({ profileImage, name, username, likes, url, onClick }) {
    return <div onClick={onClick} className="mb-1 cursor-pointer rounded-md overflow-hidden md:mb-5">
        <img src={`${url}`} className="w-full object-contain" />
        <div className="flex gap-2 p-2 justify-between border-[1px] dark:bg-black border-gray-200 dark:border-none rounded-b-md">
          <div className="flex gap-1 md:gap-2 align-middle">
            {/* userpicture, name, username */}
            <div className="m-auto overflow-hidden">
              <img src={`${profileImage}`} className="rounded-full" />
            </div>
            <div className="m-auto">
              <p className="text-[0.75rem] font-semibold dark:text-white">{name}</p>
              <p className="text-[0.75rem] text-gray-500 font-medium dark:text-gray-200">@{username}</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div className='w-3 md:w-4 m-auto'>
              <LikeIcon />
            </div>
            <p className='m-auto dark:text-white'>{likes}</p>
          </div>
        </div>
    </div>
}

export default Card;
