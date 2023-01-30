import React, { useState, useEffect, useMemo } from "react";
import { fetchShows } from "../../api";

const useFetch = (fetchUrl) => {
  const [shows, setShows] = useState([]);
  const fetchedShows = async () => {
    setShows(await fetchShows(fetchUrl));
  };
  useEffect(() => {
    fetchedShows();
    return () => {
      console.log("shows", shows);
      setShows([]);
    };
  }, [fetchUrl]);

  //const showsMemo = useMemo(() => {}, [second])
  return shows;
};

export default useFetch;
