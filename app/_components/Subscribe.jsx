"use client";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { db } from "../../config/firebase";

async function addDataToFireStore(email, phone) {
  try {
    const docRef = await addDoc(collection(db, "participant"), {
      email: email,
      phone: phone,
    });
    return true;
  } catch (error) {
    return false;
  }
}

function Subscribe() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (inputPhone) => {
    const regex = /\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(inputPhone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || email.length === 0 || !isEmail(email)) {
      setEmailError("Enter valid Email!");
    } else {
      setEmail(email);
    }

    let validPhone = validatePhone(phone);
    if (!validPhone) {
      setPhoneError("Enter valid phone number!");
    } else {
      setPhone(phone);
    }

    if (validPhone) {
      const added = addDataToFireStore(email, phone);
      if (added) {
        setEmail("");
        setPhone("");
        setShowConfirmation(true);
        setEmailError("");
        setPhoneError("");
      }
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl px-8 sm:px-4 sm:py-6 xs:px-4 xs:py-6 ">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold sm:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Let's Talk!
      </h1>

      <h2 className="mx-auto mt-10 mb-10 xs:mt-7 xs:mb-7 sm:mt-7 sm:mb-7 max-w-screen-xl text-gray-500 text-xl md:text-2xl lg:text-2xl xl:text-3xl">
        Want to manage your practice more efficiently using AI-enabled
        technology?
      </h2>
      <div className="mx-auto max-w-lg  bg-gray-200 rounded-lg">
        {showConfirmation && (
          <div className="p-3 text-center">
            <p className="text-design font-bold">
              Thank you for signing up! We will contact you shortly.
            </p>
          </div>
        )}
        {emailError && (
          <div className="p-3 text-center">
            <p className="text-red-600">{emailError}</p>
          </div>
        )}
        {phoneError && (
          <div className="p-3 text-center">
            <p className="text-red-600">{phoneError}</p>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="mb-0 space-y-4 pt-0 sm:p-6 lg:p-8"
          autoComplete="off"
        >
          <div className="px-3 py-3">
            <label htmlFor="email" className="sr-only text-3xl">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-400 p-2 pe-6 text-sm shadow-sm"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="px-3 py-3">
            <label
              htmlFor="phone"
              className="sr-only text-md lg:text-3xl xl:text-3xl"
            >
              Phone
            </label>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                className="w-full rounded-lg border-gray-400 p-2 pe-6 text-sm shadow-sm"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="px-3 py-2">
            <button
              type="submit"
              className="w-full rounded-md px-3 py-2 font-medium lg:font-bold xl:font-bold text-white  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400"
            >
              Sign Up!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
