"use client";

import React, {use} from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/hooks/useTheme";

export default function ToggleTheme() {
	const { theme, toggle } = useTheme();
	return (
		<button
			className=" fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center focus:hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
			onClick={toggle}>
			{theme === "light" ? <BsSun /> : <BsMoon />}
		</button>
	);
}
