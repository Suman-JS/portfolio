"use client";

import React, { useState, createContext } from "react";
import { links } from "@/lib/data";

type SectionNames = (typeof links)[number]["name"];

type ActiveSectionContextType = {
	activeSection: SectionNames;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionNames>>;
	timeOfLastClicked: number;
	setTimeOfLastClicked: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
	createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [activeSection, setActiveSection] = useState<SectionNames>("Home");
	const [timeOfLastClicked, setTimeOfLastClicked] = useState(0);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClicked,
				setTimeOfLastClicked,
			}}>
			{children}
		</ActiveSectionContext.Provider>
	);
}
