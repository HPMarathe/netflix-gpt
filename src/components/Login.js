import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData, checkValidDataWithName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate using regex for signin & signup
    const message = !isSignInForm
      ? checkValidDataWithName(
          name.current.value,
          email.current.value,
          password.current.value
        )
      : checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);
    // console.log(email);
    // console.log(password);

    // if (message == null){
    //   Siignin/Signup logic
    // }

    //using early return here as if there are any error message then return otherwise if it is null then authenticate
    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // As this is a promise so if the request is succesfull then it will give us a user object & it will sign in automatically.
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              //why dispatch is neeeded here?
              // if you didnt dispatch addUser after updating the profile your image & name will not be reflected in appDistributionOrigin.Check this - sign up => go to redux extension & check.

              const { uid, email, displayName, photoURL } = auth?.currentUser;

              // const { uid, email, displayName, photoURL } = user
              // This will not work because in user values are not updated.
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // if promise gives error show error message
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-white text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {/* When you click on button in the form it will bydefault call onsubmit method as it is trying tto submit a form & this will refresh the page.To avoid this do this on form -   onSubmit={(e) => e.preventDefault()}*/}
        <p className="font-bold text-red-600 px-4 py-2 text-lg">
          {errorMessage}
        </p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-600 text-white w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="text-white cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Aldready Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
