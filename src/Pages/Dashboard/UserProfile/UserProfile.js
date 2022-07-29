import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
// import useReactQuery from "../../../Hooks/useReactQuery";
import { useQuery } from "@tanstack/react-query";
import UpdateProfile from "./UpdateProfile";
import ViewProfile from "./ViewProfile";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  //   const email = user.email;
  const url = ``;
  //   const { data: profile, refetch } = useReactQuery(url);
  const { data: profile, refetch } = useQuery(() =>
    axios.get(url).then((data) => {
      console.log(data?.data);
      refetch();
    })
  );

  return (
    <div className="flex justify-center flex-wrap gap-20 mt-5">
      <ViewProfile key={profile?._id} profile={profile} />
      <UpdateProfile refetch={refetch} user={user} />
    </div>
  );
};

export default UserProfile;
