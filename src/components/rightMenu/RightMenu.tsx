import Ad from "../Ad";
import UserInfoCard from "../UserInfoCard";
import UserMediaCard from "../UserMediaCard";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";

import { Suspense } from "react";

const RightMenu = ({ userID }: { userID?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {
        userID ? (
          <>
            <UserInfoCard userID={userID}/>
            <UserMediaCard userID={userID}/>
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
