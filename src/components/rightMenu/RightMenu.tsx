
import Ad from "../Ad";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";

import { Suspense } from "react";

const RightMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      User
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;