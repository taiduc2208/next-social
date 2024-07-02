import Image from "next/image";
const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll scrollbar-hide text-xs">
      <div className="flex gap-8 ">
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="https://images.pexels.com/photos/11887201/pexels-photo-11887201.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
          <span className="font-medium">Stephen</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="https://images.pexels.com/photos/23932715/pexels-photo-23932715/free-photo-of-anh-sang-thanh-ph-phong-c-nh-hoang-hon.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
          <span className="font-medium">Brandon</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="https://images.pexels.com/photos/16830557/pexels-photo-16830557/free-photo-of-cay-nau-v-cay-c.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
          <span className="font-medium">Harriet</span>
        </div>
      </div>
    </div>
  )
}

export default Stories