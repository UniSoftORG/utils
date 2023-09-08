import { FlexibleObj, ExtractOptions } from "@utils";

/**
 * Recursively collects keys from an object based on the specified criteria.
 *
 * @param {FlexibleObj<ObjectType, KeyType>} obj - The object to collect keys from.
 * @param {KeyType} collectKeys - The key to collect keys from.
 * @param {KeyType} childrenKey - The key representing the children of the object.
 * @param {ExtractOptions<KeyType>} options - Additional options for key extraction.
 * @return {KeyType[]} An array of collected keys.
 */
export function recursiveKeyCollection<
  ObjectType,
  KeyType extends string = string,
>(
  obj: FlexibleObj<ObjectType, KeyType>,
  collectKeys: KeyType | KeyType[],
  childrenKey: KeyType = "children" as KeyType,
  options?: ExtractOptions<KeyType>,
): KeyType[] {
  const keysSet = new Set([
    ...((options?.additionalProps as any[]) ?? []),
    ...(typeof collectKeys === "string"
      ? (obj[collectKeys] as KeyType[]) ?? []
      : collectKeys),
  ]);

  (obj[childrenKey] as FlexibleObj<ObjectType, KeyType>[])?.forEach(
    (child: FlexibleObj<ObjectType, KeyType>) => {
      recursiveKeyCollection(child, collectKeys, childrenKey).forEach((p) =>
        keysSet.add(p),
      );
    },
  );

  return Array.from(keysSet) as KeyType[];
}
