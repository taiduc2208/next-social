import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userID }: { userID?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm flex flex-col gap-4 ">
      {/* top  */}
      <div className="flex justify-between font-medium items-center">
        <span className="text-gray-500 ">User Infomation</span>
        <Link href="/" className="text-blue-500 cursor-pointer text-xs ">
          See all
        </Link>
      </div>
      {/* bottom  */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Helen Ortega</span>
          <span className="text-xs ">@jonathan</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          delectus obcaecati nesciunt placeat.
        </p>
        <div className="flex gap-2 items-center">
          <Image src="/map.png" alt="" width={16} height={16} className="" />
          <span className="">
            Living in <b>Hanoi</b>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/school.png" alt="" width={16} height={16} className="" />
          <span className="">
            Went to <b>Hanoi University of Sicence and Technology</b>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/work.png" alt="" width={16} height={16} className="" />
          <span className="">
            Work at <b>Four seasons</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} className="" />
            <span className="text-blue-500 font-medium">
              abu.dev
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} className="" />
            <span className="">
              Joined April 2024
            </span>
          </div>
        </div>
        <button className="bg-blue-500 text-white w-full items-center p-2 rounded-md" >Follow</button>
        <button className="text-red-500 font-semibold self-end" >Block User</button>
      </div>
    </div>
  );
};

export default UserInfoCard;
