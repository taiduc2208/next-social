import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProfilePage = async ({ params }: { params: { username?: string } }) => {
  const username = params.username;
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });
  if (!user) return notFound();

  const { userId: currentUserId } = auth();
  let isBlocked;
  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockedId: currentUserId,
        blockerId: user.id,
      },
    });
    if (res) isBlocked = true;
    else {
      isBlocked = false;
    }
  }
  if (isBlocked) return notFound();
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
                src={user?.cover || "/noCover.png"}
                alt=""
                fill
                className="rounded-md object-cover "
              />
              <Image
                src={user?.avatar || "/noAvatar.png"}
                alt=""
                width={128}
                height={128}
                className="rounded-full cursor-pointer object-cover w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-20 mb-4">
              <span className="font-medium text-2xl">
                {user.name && user.surname
                  ? user.name + " " + user.surname
                  : user.username}
              </span>
              <div className="flex gap-12 my-4">
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-semibold text-sm">
                    {user._count.posts}
                  </span>
                  <span className=" text-sm">Posts</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-semibold text-sm">
                    {user._count.followers}
                  </span>
                  <span className=" text-sm">Followers</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-semibold text-sm">
                    {user._count.followings}
                  </span>
                  <span className=" text-sm">Following</span>
                </div>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] ">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
