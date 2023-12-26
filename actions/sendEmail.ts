"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/validate-string";
import { get } from "http";
import { getErrorMessage } from "@/lib/check-error";
import ContactFormEmail from "@/email/contactForm-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
	const message = FormData.get("message");
	const senderEmail = FormData.get("senderEmail");

	if (!validateString(message, 5000)) {
		return {
			error: "Message is too long",
		};
	}

	if (!validateString(senderEmail, 100)) {
		return {
			error: "Email is too long",
		};
	}
	let data;

	try {
		data = await resend.emails.send({
			from: "Contact Form <onbording@resend.dev>",
			to: ["sm7135120@gmail.com"],
			subject: "Message from Protfolio by : " + senderEmail,
			reply_to: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: senderEmail as string,
			}),
		});
	} catch (error: unknown) {
		error: getErrorMessage(error);
	}

	return { data };
};
