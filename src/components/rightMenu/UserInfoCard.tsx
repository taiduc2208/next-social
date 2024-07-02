import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const UserInfoCard = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt);
  const fommattedCode = createdAtDate.toLocaleDateString("ja",{
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const {userId: currentUserId} = auth();
  if(currentUserId){
    const blockRes = await prisma.block.findFirst({
      where: {
        blockedId: user.id,
        blockerId: currentUserId,
      }
    })
    blockRes ? (isUserBlocked = true) : (isUserBlocked = false)
    const followRes = await prisma.follower.findFirst({
      where: {
        followingId: user.id,
        followerId: currentUserId,
      }
    })
    followRes ? (isFollowing = true) : (isFollowing = false)
    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        receiverId: user.id,
        senderId: currentUserId,
      }
    })
    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false)
  }

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
          <span className="text-xl font-bold">{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>
          <span className="text-xs ">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p> } 
        { user.city && <div className="flex gap-2 items-center">
          <Image src="/map.png" alt="" width={16} height={16} className="" />
          <span className="">
            Living in <b>{user.city}</b>
          </span>
        </div>}
        { user.school && <div className="flex gap-2 items-center">
          <Image src="/school.png" alt="" width={16} height={16} className="" />
          <span className="">
            Went to <b>{user.school}</b>
          </span>
        </div>}
        {user.work && <div className="flex gap-2 items-center">
          <Image src="/work.png" alt="" width={16} height={16} className="" />
          <span className="">
            Work at <b>{user.work}</b>
          </span>
        </div>}
        <div className="flex items-center justify-between">
          { user.website && <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} className="" />
            <span className="text-blue-500 font-medium">
              {user.website}
            </span>
          </div>}
          {fommattedCode && <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} className="" />
            <span className="">
              Joined {fommattedCode}
            </span>
          </div>}
        </div>
        <button className="bg-blue-500 text-white w-full items-center p-2 rounded-md" >Follow</button>
        <button className="text-red-500 font-semibold self-end" >Block User</button>
      </div>
    </div>
  );
};

export default UserInfoCard;
