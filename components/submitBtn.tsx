import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="group flex items-center justify-center gap-2 bg-gray-900 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all dark:bg-white dark:bg-opacity-10 dark:text-white focus:scale-110 hover:scale-110 active:scale-105 hover:active:bg-gray-950 dark:hover:active:bg-gray-200 font-medium disabled:scale-100 disabled:bg-opacity-65"
			disabled={pending}>
			{pending ? (
				<div className=" h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black"></div>
			) : (
				<>
					Submit{" "}
					<FaPaperPlane className=" text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
				</>
			)}
		</button>
	);
}
