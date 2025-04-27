import type { UUID } from "node:crypto";

export function isUUID(value: string): value is UUID {
	const uuidRegex = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
	return uuidRegex.test(value);
}
