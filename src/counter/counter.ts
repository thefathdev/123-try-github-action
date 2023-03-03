export function counter(num: number, method?: "increment" | "decrement") {
  switch (method) {
    case "increment":
      return num + 1;

    case "decrement":
      return num - 1;

    default:
      return num;
  }
}
