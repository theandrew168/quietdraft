import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

export type IntegrationOverview = {
	name: string;
	icon: IconDefinition;
	description: string;
	features: string[];
};
