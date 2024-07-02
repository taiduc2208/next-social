import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm flex flex-col gap-6 ">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/26842739/pexels-photo-26842739/free-photo-of-mua-he-cay-b-i-v-n-cong-vien.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill
          className="rounded-md object-cover "
        />
        <Image
          src="https://images.pexels.com/photos/26842691/pexels-photo-26842691/free-photo-of-thu-v-t-d-ng-v-t-con-v-t-loai-v-t.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={48}
          height={48}
          className="rounded-full cursor-pointer object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center ">
        <span className="font-semibold ">Tommy Stephens</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/26842691/pexels-photo-26842691/free-photo-of-thu-v-t-d-ng-v-t-con-v-t-loai-v-t.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              width={48}
              height={48}
              className="rounded-full object-cover w-3 h-3 "
            />
          </div>
          <span className="text-xs text-gray-500 "> 500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white p-2 text-xs rounded-md">My Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
