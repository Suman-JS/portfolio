import React from "react";

export default function Footer() {
	return (
		<footer className=" mb-10 px-4 text-center text-gray-500">
			<small className="block mb-2 text-xs">
				&copy; {new Date().getFullYear()}{" "}
				<span className="font-medium">Suman</span> | All rights reserved.
			</small>
			<p className=" text-xs ">
				<span className="font-semibold">About this website :</span>
				built with React & Next.js (App Router & Server Actions), TypeScript,
				Tailwind CSS, Framer Motion, React Email and Resend and hosted on
				Vercel, and deployed with GitHub.
			</p>
		</footer>
	);
}
