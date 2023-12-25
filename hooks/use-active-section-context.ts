import { useContext } from "react";
import { ActiveSectionContext } from "@/context/active-section-context";

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error(
			"useActiveSectionContext must be used within an ActivesectionProvider"
		);
	}

	return context;
}
