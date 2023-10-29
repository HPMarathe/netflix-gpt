import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const GptSearch = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((store) => store.user);
  // console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  //onAuthStateChanged should be called only once.Hence it is put in useeffect.This functionality calls when sign in,sign up & sign out happens.It is similar to event listener.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // fixed this bug as in previous commit when i was signing off it was not able to remove the user.Because i havent called removeUse function.
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribing when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    //Toggle GPTSearch Page
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between ">
      <img className=" w-44 mx-auto md:mx-0" src={LOGO} alt="netlfix-logo" />

      {/* Display this div only when someone is signed in */}
      {user && (
        <div className="flex md:p-2 justify-between">
          {GptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 m-2 bg-black text-white border border-white"
            >
              {/* <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="spanish">Spanish</option> */}
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-2 my-2 bg-red-600 text-white hover:bg-white hover:text-red-600
            rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {GptSearch ? "Home" : "GPT Search"}
          </button>
          {/* <img
            className=" hidden md:block w-12 h-10 mt-2"
            alt="usericon"
            // src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"

            src={user?.photoURL}
          /> */}
          <button
            onClick={handleSignOut}
            className=" py-2 px-4 mx-2 my-2 bg-red-600 text-white  hover:bg-white hover:text-red-600
            rounded-lg "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
