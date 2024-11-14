"use client";
import { validateFullName, validatePhone } from "@/lib/util";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { db } from "../../config/firebase";

async function addDataToFireStore(fullName, email, phone) {
  try {
    const docRef = await addDoc(collection(db, "participant"), {
      fullName: fullName,
      email: email,
      phone: phone,
    });
    return true;
  } catch (error) {
    return false;
  }
}

function Subscribe() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validFullName = validateFullName(fullName);
    if (!validFullName) {
      setFullNameError("Enter valid full name!");
    } else {
      setFullName(fullName);
    }

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

    if (validFullName && validPhone) {
      const added = addDataToFireStore(fullName, email, phone);
      if (added) {
        setFullName("");
        setEmail("");
        setPhone("");
        setShowConfirmation(true);
        setFullNameError("");
        setEmailError("");
        setPhoneError("");
      }
    }
  };
  return (
    <div className="flex-1 flex-row xs:flex-col sm:flex-col md:flex-col sm:px-4 sm:py-6 xs:px-4 xs:py-6 items-center justify-center content-normal xl:content-center 2xl:content-center">
      <div>
        <h4 className="mx-auto mt-10 mb-10 ml-5 mr-5 text-center xs:mt-3 xs:mb-3 sm:mt-3 sm:mb-3 text-black text-lg md:text-2xl lg:text-2xl xl:text-2xl">
          Want to manage your practice more efficiently using AI-enabled
          technology?
        </h4>
      </div>
      <div>
        <h1 className="text-xl ml-10 mr-10 lg:text-3xl xl:text-3xl font-bold sm:text-3xl text-center text-black">
          Let's Talk!
        </h1>
      </div>
      <div className="mx-auto max-w-xl bg-gray-300 rounded-xl mt-10 xs:mt-5 sm:mt-5 md:mt-5">
        <div>
          {showConfirmation && (
            <div className="pt-3 text-center">
              <p className="text-design font-bold">
                Thank you for signing up! We will contact you shortly.
              </p>
            </div>
          )}
          {fullNameError && (
            <div className="pt-3 text-center">
              <p className="text-red-600 font-bold">{fullNameError}</p>
            </div>
          )}
          {emailError && (
            <div className="pt-3 text-center">
              <p className="text-red-600 font-bold">{emailError}</p>
            </div>
          )}
          {phoneError && (
            <div className="pt-3 text-center">
              <p className="text-red-600 font-bold">{phoneError}</p>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-0 space-y-4 pt-3 p-10"
          autoComplete="off"
        >
          <div className="px-5 py-3 pt-6">
            <label htmlFor="fullName" className="sr-only text-3xl">
              Full Name
            </label>

            <div className="relative">
              <input
                type="text"
                id="fullName"
                className="w-full rounded-xl border-gray-400 p-2 pe-6 text-sm shadow-sm"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="px-5 py-3">
            <label htmlFor="email" className="sr-only text-3xl">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full rounded-xl border-gray-400 p-2 pe-6 text-sm shadow-sm"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="px-5 py-3">
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
                className="w-full rounded-xl border-gray-400 p-2 pe-6 text-sm shadow-sm"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="px-3 py-2 rounded-md flex justify-center items-center">
            <button
              type="submit"
              className="w-3/4 rounded-xl px-3 py-2 font-medium lg:font-bold xl:font-bold text-slate-800 bg-design"
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
