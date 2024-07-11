export const validateString = (value: unknown, maxLength: number) => {
	if (!value || typeof value !== "string") {
		return false;
	}
	if (value.length > maxLength) {
		return false;
	}
	return true;
};
