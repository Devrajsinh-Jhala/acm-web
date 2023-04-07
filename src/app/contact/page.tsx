"use client";
import Image from "next/image";
import React from "react";
import contact from "../../assets/undraw_contact_us_re_4qqt.svg";
import { useFormik } from "formik";
import { contactFormSchema } from "@/schemas";

type Props = {};

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const ContactUs = (props: Props) => {
  // ** Form Validation
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactFormSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div className="my-10">
      <section className="flex items-center justify-between gap-24">
        <form onSubmit={handleSubmit} className="flex w-[40%] flex-col gap-y-5">
          <div className="flex flex-col gap-1 items-start justify-start">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              className="px-4 py-2 w-full border dark:border-light border-dark placeholder:text-gray-400 dark:placeholder:text-light dark:text-light text-gray-800  rounded-lg text-sm focus:outline-none "
              placeholder="Please enter your Name..."
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm mt-1">{errors?.name}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 items-start justify-start">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="px-4 py-2 border dark:border-light border-dark placeholder:text-gray-400 dark:placeholder:text-light dark:text-light text-gray-800 w-full rounded-lg text-sm focus:outline-none "
              placeholder="Please enter your Email..."
            />

            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors?.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 items-start justify-start">
            <label htmlFor="message">Messages</label>
            <textarea
              rows={6}
              autoComplete="off"
              name="message"
              id="message"
              cols={30}
              value={values.message}
              onBlur={handleBlur}
              onChange={handleChange}
              className="px-4 py-2 border w-full dark:border-light border-dark resize-none placeholder:text-gray-400 dark:placeholder:text-gray-50 dark:text-light text-gray-800 rounded-lg text-sm focus:outline-none "
              placeholder="Please enter your Message..."
            />
            {errors.message && touched.message && (
              <p className="text-red-500 text-sm mt-1">{errors?.message}</p>
            )}
          </div>

          <input
            type="submit"
            disabled={
              errors.name && errors.email && errors.message ? true : false
            }
            value="Submit Message"
            className={`bg-secondary cursor-pointer text-sm font-bold py-2 px-6 rounded-lg ${
              errors
                ? "disabled:opacity-50 disabled:cursor-not-allowed"
                : "cursor-pointer opacity-100"
            }`}
          />
        </form>
        <div>
          <Image
            src={contact}
            alt="Contact"
            className="object-contain"
            width={700}
            height={700}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
