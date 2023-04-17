import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase";
import SignupForm from "./SignupForm";

const Login = () => {
  const auth = getAuth(app);

  // google provider
  const googleProvider = new GoogleAuthProvider();
  const googleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const signUpUser = result.user;
        console.log(signUpUser);
        sendUserEmailVerification(signUpUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // github provider
  const githubProvider = new GithubAuthProvider();
  const githubSignUp = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const signUpUser = result.user;
        console.log(signUpUser);
        sendUserEmailVerification(signUpUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // email provider
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
        const signUpUser = result.user;
        sendUserEmailVerification(signUpUser);
        console.log(signUpUser);
        updateUser(signUpUser, name);
      })
      .catch((error) => {
        console.log(error.message);
      });
    e.target.reset();
  };

  // verification email send
  const sendUserEmailVerification = (userData) => {
    sendEmailVerification(userData)
      .then((result) => {
        console.log("verification successful");
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  // profile update
  const updateUser = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="text-center mt-20">
          <div
            className="bg-slate-200 rounded-lg p-2 cursor-pointer mx-auto w-1/3 mb-3"
            onClick={googleSignUp}
          >
            <button>
              <img
                className="w-14 h-auto"
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt=""
              />
            </button>
          </div>
          <div
            className="bg-slate-200 rounded-lg p-2 cursor-pointer mx-auto w-1/3 mb-3"
            onClick={githubSignUp}
          >
            <button>
              <img
                className="w-14 h-auto"
                src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                alt=""
              />
            </button>
          </div>
          <div className="bg-slate-200 rounded-lg p-2 cursor-pointer mx-auto w-1/3 mb-3">
            <button>
              <img
                className="w-14 h-auto"
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="mt-14">
          <div className="w-1/2 mx-auto text-center">
            <h1 className="text-3xl font-semibold mb-5 text-black">
              Sign up with Email
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full border py-3 px-3 rounded-md mb-3 focus:outline-none focus:border-sky-500 focus:ring-1"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border py-3 px-3 rounded-md mb-3 focus:outline-none focus:border-sky-500 focus:ring-1"
                placeholder="Enter your email"
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                className="w-full border py-3 px-3 rounded-md mb-3 focus:outline-none focus:border-sky-500 focus:ring-1"
                placeholder="Enter your pasword"
                required
              />
              <input
                type="submit"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                value="Sign up"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
