import { expect, test } from "vitest";

import { isUUID } from "./utils";

test.each([
	{ value: "3a83626c-a95c-47ac-9996-d6785122e1c1", expected: true },
	{ value: "3a83626c-a95c-47ac-9996-d6785122e1cZ", expected: false },
	{ value: "3a83626ca95c47ac9996d6785122e1c1", expected: false },
	{ value: "foobar", expected: false },
	{ value: "", expected: false },
])("isUUID($value) -> $expected", ({ value, expected }) => {
	expect(isUUID(value)).toEqual(expected);
});
