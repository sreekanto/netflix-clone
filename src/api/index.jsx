import axios from "axios";
const DOMAIN = process.env.REACT_APP_API_DOMAIN;
const KEY = process.env.REACT_APP_API_KEY;
export const instance = axios.create({
  baseURL: DOMAIN,
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

export const fetchShows = async (fetchUrl) => {
  console.log("usefetch:", fetchUrl);
  const URL = `${fetchUrl}?api_key=${KEY}`;
  // if (fetchUrl) URL = `trending/all/day?api_key=${KEY}`;
  // else URL = `trending/all/day?api_key=${KEY}`;
  const PictureURL = `${DOMAIN}configuration?api_key=${KEY}`;
  try {
    const {
      data: { results },
    } = await instance.get(URL);
    //console.log(results);
    const {
      data: {
        images: {
          backdrop_sizes,
          logo_sizes,
          poster_sizes,
          secure_base_url,
          still_sizes,
        },
      },
    } = await instance.get(PictureURL);

    const modifyResults = results.map((result) => ({
      ...result,
      poster: `${secure_base_url}${poster_sizes[3]}${result?.poster_path}`,
      poster_original: `${secure_base_url}${poster_sizes[6]}${result?.poster_path}`,
      backdrop: `${secure_base_url}${backdrop_sizes[0]}${result?.backdrop_path}`,
      backdrop_original: `${secure_base_url}${backdrop_sizes[3]}${result?.backdrop_path}`,
    }));
    //console.log(modifyResults);
    return modifyResults;
  } catch (error) {
    console.log(error.message);
  }
};
