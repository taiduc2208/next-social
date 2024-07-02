import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userID }: { userID?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm flex flex-col gap-4 ">
      {/* top  */}
      <div className="flex justify-between font-medium items-center">
        <span className="text-gray-500 ">User Media</span>
        <Link href="/" className="text-blue-500 cursor-pointer text-xs ">
          See all
        </Link>
      </div>
      {/* bottom  */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26842844/pexels-photo-26842844/free-photo-of-thanh-ph-d-ng-dan-ong-nh-ng-ng-i.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26842859/pexels-photo-26842859/free-photo-of-mon-an-g-dan-ong-nh-ng-ng-i.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26843744/pexels-photo-26843744/free-photo-of-bi-n-chuy-n-bay-chim-b-bi-n.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26843807/pexels-photo-26843807/free-photo-of-chim-thu-v-t-d-ng-v-t-con-v-t.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        
      </div>
    </div>
  );
};

export default UserMediaCard;
