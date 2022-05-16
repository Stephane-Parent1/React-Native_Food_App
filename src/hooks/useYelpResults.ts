import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { Business } from "../api/yelp.model";

export default (urlPath: string, defaultTerm?: string) => {
  const [results, setResults] = useState<Business[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("Pasta");
  }, []);

  return [searchApi, results, errorMessage] as const;
};
