export const capitalize = (name: string): string => {
  return name
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}
