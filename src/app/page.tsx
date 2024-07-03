import AddPost from "@/components/AddPost"
import Feed from "@/components/feed/Feed"
import LeftMenu from "@/components/leftMenu/LeftMenu"
import RightMenu from "@/components/rightMenu/RightMenu"
import Stories from "@/components/Stories"
import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import { notFound } from "next/navigation"


const Homepage = async () => {
  const {userId} = auth();
  if (!userId) return notFound();
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  if (!user) return notFound();

  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home"/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories/>
          <AddPost/>
          <Feed/>
        </div>
      </div>
      <div className="hidden lg:block w-[30%] "><RightMenu user={user} type="home" /></div>
      {/* <div className="hidden lg:block w-[30%] "><RightMenu user={user}/></div> */}
    </div>
  )
}

export default Homepage