// import { ApiJobOpportunity } from "./apiTypes";

// Helper function to convert responsibilities string to array if needed
export function  responsibilitiesArray(responsibilities: string|string[]):string[] {
  if (Array.isArray(responsibilities)) {
    return responsibilities;
  }

  // If it's a string, try to convert it to an array by splitting on bullet points
  if (typeof responsibilities === "string") {

    // split by newlines or periods
    return responsibilities
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }

  return [];
};
