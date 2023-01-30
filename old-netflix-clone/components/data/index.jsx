import axios from "axios";
const DOMAIN = process.env.REACT_APP_API_DOMAIN;
const KEY = process.env.REACT_APP_API_KEY;

export const fetchData = async (url, showType, page = 1) => {
  const URL = `${DOMAIN}${
    url ? url : "trending/all/day"
  }?api_key=${KEY}&page=${page}`;
  //console.log("URL", URL);
  const PictureURL = `${DOMAIN}configuration?api_key=${KEY}`;
  try {
    const {
      data: { results },
    } = await axios.get(URL);
    const {
      data: {
        images: { secure_base_url, backdrop_sizes, poster_sizes },
      },
    } = await axios.get(PictureURL);
    const modifyResults = results.map((result, index) => ({
      ...result,
      // landscape: `${secure_base_url}${backdrop_sizes[3]}${result?.backdrop_path}`,
      // backdrop_sizes,
      // poster_sizes,
      img_backdrop_medium: `${secure_base_url}${backdrop_sizes[0]}${result?.backdrop_path}`,
      img_backdrop_original: `${secure_base_url}${backdrop_sizes[3]}${result?.backdrop_path}`,
      img_poster_medium: `${secure_base_url}${poster_sizes[3]}${result?.poster_path}`,
      img_poster_original: `${secure_base_url}${poster_sizes[6]}${result?.poster_path}`,
      media_type: result.media_type ? result.media_type : showType,
    }));
    //console.log(modifyResults)
    return modifyResults;
  } catch (error) {
    console.log(error);
  }
};
