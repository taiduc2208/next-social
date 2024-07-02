import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm flex flex-col gap-4 ">
      {/* top  */}
      <div className="flex justify-between font-medium items-center">
        <span className="text-gray-500 ">Friend Requests</span>
        <Link href="/" className="text-blue-500 cursor-pointer text-xs ">
          See all
        </Link>
      </div>
      {/* user  */}
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26781807/pexels-photo-26781807/free-photo-of-l-c-da-khong-b-u.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={40}
            height={40}
            className="cursor-pointer h-10 w-10 rounded-full"
          />
          <span className="font-semibold">Gilbert Sherman</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26781807/pexels-photo-26781807/free-photo-of-l-c-da-khong-b-u.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={40}
            height={40}
            className="cursor-pointer h-10 w-10 rounded-full"
          />
          <span className="font-semibold">Gilbert Sherman</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26781807/pexels-photo-26781807/free-photo-of-l-c-da-khong-b-u.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={40}
            height={40}
            className="cursor-pointer h-10 w-10 rounded-full"
          />
          <span className="font-semibold">Gilbert Sherman</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26781807/pexels-photo-26781807/free-photo-of-l-c-da-khong-b-u.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={40}
            height={40}
            className="cursor-pointer h-10 w-10 rounded-full"
          />
          <span className="font-semibold">Gilbert Sherman</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
