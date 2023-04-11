"use client";
import Image from "next/image";
import React, { useRef } from "react";
import contact from "../../assets/undraw_contact_us_re_4qqt.svg";
import { useFormik } from "formik";
import { contactFormSchema } from "../../schemas";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

type Props = {};

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const ContactUs = (props: Props) => {
  const successMessage = (
    <p className="text-center text-sm md:text-base">
      Message sent successfully! Thank you for your time!
    </p>
  );
  const errorMessage = (
    <p className="text-center text-sm md:text-base">
      Oops! Something went wrong!
    </p>
  );
  // ** EmailJS integration
  const formRef = useRef<any>();

  // ** Form Validation
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactFormSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        emailjs
          .sendForm(
            "service_wh0njvu",
            "template_dikc2ve",
            formRef.current,
            "Jda2EjyCK1FWHBuJM"
          )
          .then(
            (result) => {
              toast.success(successMessage);
            },
            (error) => {
              toast.error(errorMessage);
            }
          );
      },
    });

  return (
    <div className="my-10 px-10 lg:px-0">
      <div>
        <Toaster />
      </div>
      <section className="flex md:flex-row flex-col items-start md:items-center justify-between gap-24">
        <motion.form
          initial={{ x: -700 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          ref={formRef}
          className="flex w-full lg:w-[40%] flex-col gap-y-5"
        >
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
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={contact}
            alt="Contact"
            className="object-contain"
            width={700}
            height={700}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;
