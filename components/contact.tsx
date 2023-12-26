"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import useSectionInView from "@/hooks/use-section-inview";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submitBtn";
import toast from "react-hot-toast";
import Image from "next/image";
import Envalop from "@/public/envalop.png";
import NotSent from "@/public/not-sent.png";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)]"
			initial={{ opacity: 0, x: 100 }}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				duration: 0.5,
			}}
			viewport={{
				once: true,
			}}>
			<SectionHeading>Contact me</SectionHeading>

			<p className=" text-gray-900 dark:text-white/80 text-center">
				Please contact me directly at{" "}
				<a
					className="hoverAnimation text-gray-900 dark:text-gray-300"
					href="mailto:sm7135120@gmail.com">
					sm7135120@gmail.com
				</a>{" "}
				or use the form below.
			</p>

			<form
				ref={formRef}
				className="flex flex-col mt-10 dark:text-black"
				action={async (FormData) => {
					const { data, error } = await sendEmail(FormData);
					if (error) {
						toast.custom((t) => (
							<div
								className={`${
									t.visible ? "animate-enter" : "animate-leave"
								} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
								<div className="flex-1 w-0 p-4">
									<div className="flex items-start">
										<div className="flex-shrink-0 pt-0.5">
											<Image
												src={NotSent}
												alt="message not sent"
												className="h-10 w-10 rounded-full"
											/>
										</div>
										<div className="ml-3 flex-1">
											<p className="text-sm font-medium text-gray-900">
												Message status
											</p>
											<p className="mt-1 text-sm text-gray-500">
												Something went wrong!
											</p>
										</div>
									</div>
								</div>
								<div className="flex border-l border-gray-200">
									<button
										onClick={() => toast.dismiss(t.id)}
										className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
										Close
									</button>
								</div>
							</div>
						));
						return;
					}
					toast.custom((t) => (
						<div
							className={`${
								t.visible ? "animate-enter" : "animate-leave"
							} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
							<div className="flex-1 w-0 p-4">
								<div className="flex items-start">
									<div className="flex-shrink-0 pt-0.5">
										<Image
											src={Envalop}
											alt="Envalop"
											className="h-10 w-10 rounded-full"
										/>
									</div>
									<div className="ml-3 flex-1">
										<p className="text-sm font-medium text-gray-900">
											Message status
										</p>
										<p className="mt-1 text-sm text-gray-500">
											Message sent successfully!
										</p>
									</div>
								</div>
							</div>
							<div className="flex border-l border-gray-200">
								<button
									onClick={() => toast.dismiss(t.id)}
									className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
									Close
								</button>
							</div>
						</div>
					));
					formRef.current?.reset();
				}}>
				<input
					type="email"
					name="senderEmail"
					placeholder="Enter your email address here"
					className=" h-14 rounded-lg borderBlack p-4 font-medium dark:text-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
					required
					maxLength={100}
				/>
				<textarea
					placeholder="Your message here"
					name="message"
					className="h-52 my-3 rounded-lg borderBlack p-4 font-normal dark:text-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all leading-5 resize-none dark:outline-none"
					required
					maxLength={5000}
					minLength={4}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
