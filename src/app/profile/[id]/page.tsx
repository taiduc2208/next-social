import Feed from "@/components/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="p-4 bg-white rounded-lg shadow-sm text-sm flex flex-col items-center justify-center">
            <div className="h-64 w-full relative">
              <Image
                src="https://images.pexels.com/photos/26842739/pexels-photo-26842739/free-photo-of-mua-he-cay-b-i-v-n-cong-vien.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                fill
                className="rounded-md object-cover "
              />
              <Image
                src="https://images.pexels.com/photos/26842691/pexels-photo-26842691/free-photo-of-thu-v-t-d-ng-v-t-con-v-t-loai-v-t.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                width={128}
                height={128}
                className="rounded-full cursor-pointer object-cover w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-20 mb-4">
              <span className="font-medium text-2xl">Juan Evans</span>
              <div className="flex gap-12 my-4">
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-semibold text-sm">142</span>
                  <span className=" text-sm">Posts</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-semibold text-sm">1.2K</span>
                  <span className=" text-sm">Followers</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-semibold text-sm">1.4K</span>
                  <span className=" text-sm">Following</span>
                </div>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] ">
        <RightMenu userID="abu" />
      </div>
    </div>
  );
};

export default ProfilePage;
