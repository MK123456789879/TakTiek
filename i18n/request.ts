import { getRequestConfig } from "next-intl/server";
import nl from "../content/nl.json";

export default getRequestConfig(async () => {
  return {
    locale: "nl",
    messages: nl,
  };
});
