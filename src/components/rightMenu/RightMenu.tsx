import { User } from "@prisma/client";
import Ad from "../Ad";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";

import { Suspense } from "react";

const RightMenu = ({ user }: { user: User }) => {
  const userID = user.id;
  return (
    <div className="flex flex-col gap-6">
      {
        userID ? (
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
