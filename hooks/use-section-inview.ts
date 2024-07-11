import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./use-active-section-context";
import { useEffect } from "react";
import type { SectionNames } from "@/lib/types";

export default function useSectionInView(
	sectionName: SectionNames,
	threshold = 0.75
) {
	const { ref, inView } = useInView({
		threshold: threshold,
	});
	const { setActiveSection, timeOfLastClicked } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClicked > 1000) {
			setActiveSection(sectionName);
		}
	}, [inView, setActiveSection, timeOfLastClicked, sectionName]);

	return {
		ref,
	};
}
