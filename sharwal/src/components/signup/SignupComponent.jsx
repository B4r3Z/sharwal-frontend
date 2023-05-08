import { React, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { RiFileUserLine } from "react-icons/ri";
import { customStyles } from "../../customStyles/customStyles";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";

export const SignupComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const formData = new FormData();
    formData.append("file", avatar);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post(`${server}/user/create-user`, formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-myPrimary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-satoshiBold text-mySecondary">
          Create an Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-mySecondary py-8 px-4 shadow  sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-satoshiMid text-myPrimary"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  required={true}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="appearance-none block w-full px-3 py-2 border-2 border-myPrimary bg-mySecondary shadow-sm placeholder-myPrimary/50 text-myPrimary focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="eg. Barez Dilshad"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-satoshiMid text-myPrimary"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="appearance-none block w-full px-3 py-2 border-2 border-myPrimary bg-mySecondary shadow-sm placeholder-myPrimary/50 text-myPrimary focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-satoshiMid text-myPrimary"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="appearance-none block w-full px-3 py-2 border-2 border-myPrimary bg-mySecondary shadow-sm placeholder-myPrimary/50 text-myPrimary focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your Password"
                />
                {visible ? (
                  <VscEye
                    className="absolute right-2 top-2 cursor-pointer text-mySecondary"
                    size={26}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <VscEyeClosed
                    className="absolute right-2 top-2 cursor-pointer text-mySecondary"
                    size={26}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-satoshiMid text-mySecondary "
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 overflow-hidden ">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <RiFileUserLine className="text-myPrimary h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border-2 border-myPrimary shadow-sm text-sm text-myPrimary bg-mySecondary hover:by-gray-50"
                >
                  <span className="font-satoshiBold">Upload a Photo</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-satoshiMid text-mySecondary bg-myPrimary hover:bg-myPrimary/80"
              >
                Submit
              </button>
            </div>
            <div className={`${customStyles.normalFlex} max-w-full`}>
              <h4>Already have an Account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
