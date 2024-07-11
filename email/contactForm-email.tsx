import React from "react";
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { send } from "process";

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

export default function ContactFormEmail({
	message,
	senderEmail,
}: ContactFormEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New Message From Your Portfolio Website</Preview>
			<Tailwind>
				<Body className=" bg-gray-200 text-black">
					<Container>
						<Section className=" bg-white borderBlack my-10 px-10 py-4 rounded-md">
							<Heading className=" leading-tight">
								You Recieved The Following Message From The Contact Form
							</Heading>
							<Hr />
							<Text>{message}</Text>
							<Hr />
							<Text>
								This message was sent from your portfolio website. If you would
								like to respond to this message, please reply to this email :{" "}
								{senderEmail}
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
