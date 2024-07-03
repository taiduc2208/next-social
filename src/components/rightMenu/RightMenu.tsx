import { User } from "@prisma/client";
import Ad from "../Ad";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";

import { Suspense } from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

const RightMenu = ({ user, type }: { user: User; type:string }) => {
  const userID = user.id;
  return (
    <div className="flex flex-col gap-6">
      {
        userID && (type==="profile") ? (
          <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user}/>
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user}/>
          </Suspense>
          </>
        ) : null
      }
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
