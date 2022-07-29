import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const UpdateProfile = ({ refetch }) => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const name = data.displayName;
    const email = user?.email;
    const password = data.password;
    const profile = { name, email, password };
    const url = ``;

    await axios.put(url, profile).then((data) => {
      if (data) {
        toast.success("Your Profile is Updated", { theme: "colored" });
        reset();
        refetch();
      }
    });
  };
  return (
    <div className="max-w-sm w-full ">
      <form
        className="form card min-h-0 h-full w-full max-w-lg shadow-2xl glass bg-primary hover:bg-primary pb-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mx-6">
          <h2 className="text-2xl font-bold  underline text-white mt-8">
            Update Profile
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                className="input input-bordered text-secondary font-semibold placeholder:text-secondary"
                placeholder={user?.displayName || ""}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                className="input input-bordered text-secondary font-semibold placeholder:text-secondary"
                placeholder={user?.email || ""}
                readOnly
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-white">Address</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold"
              placeholder="Your Address"
              {...register("address", { required: true })}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text text-white">Phone</span>
              </label>
              <input
                className="input input-bordered text-secondary font-semibold"
                placeholder="Phone"
                type="number"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text text-white">Image URL</span>
              </label>
              <input
                className="input input-bordered text-secondary font-semibold"
                placeholder="Image URL"
                type="text"
                {...register("img")}
              />
            </div>
          </div>
          <div className="form-control ">
            <label className="label font-semibold">
              <span className="label-text text-white">LinkedIn</span>
            </label>
            <input
              placeholder="LinkedIn URL"
              className="input input-bordered text-secondary font-semibold"
              {...register("linkedIn", { required: true })}
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary hover:text-white bg-white text-primary font-bold"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
