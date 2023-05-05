import { React, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { customStyles } from "../../customStyles/customStyles";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");
  return (
    <div className="min-h-screen bg-myPrimary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-satoshiBold text-mySecondary">
          Login to Your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-mySecondary py-8 px-4 shadow  sm:px-10">
          <form className="space-y-6">
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
            <div className={`${customStyles.normalFlex} justify-between`}>
              <div className={`${customStyles.normalFlex}`}>
                <input
                  type="checkbox"
                  className="h-4 w-4  focus:ring-blue-500 focus:border-blue-500"
                  name="remember-me"
                  id="remember-me"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-myPrimary"
                >
                  Remember Me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-myPrimary hover:text-myPrimary/80"
                >
                  Forgot your Password?
                </a>
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
              <h4>Don't have an Account yet?</h4>
              <Link to="/sign-up" className="text-blue-600 pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
