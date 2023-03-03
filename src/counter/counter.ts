export function counter(
  num: number,
  method?: "increment" | "decrement" | "double"
) {
  switch (method) {
    case "increment":
      return num + 1;

    case "decrement":
      return num - 1;

    case "double":
      return num * 4;

    default:
      return num;
  }
}
