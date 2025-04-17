import { v4 as uuidv4 } from 'uuid';

// Nominal type for Guid using a unique symbol to enforce type safety
declare const brand: unique symbol;
export type Guid = string & { readonly [brand]: 'Guid' };

// Generates a new GUID (UUID v4)
export const newGuid = (): Guid => uuidv4() as Guid;

// Checks if a string is a valid GUID (UUID v4)
export const isGuid = (value: string): value is Guid =>
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);

// Safely parses a string into a Guid, throws if invalid
export const parseGuid = (value: string): Guid => {
    if (!isGuid(value)) throw new Error(`Invalid GUID: ${value}`);
    return value as Guid;
};

// Represents the empty GUID (all zeroes, per RFC 4122)
export const emptyGuid: Guid = '00000000-0000-0000-0000-000000000000' as Guid;
