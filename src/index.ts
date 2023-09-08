export default function orThrow(value: unknown, message?: string) {
  if (!value) {
    throw new Error(message);
  }

  return value;
}
