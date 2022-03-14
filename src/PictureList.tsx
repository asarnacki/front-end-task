import { FunctionComponent, useEffect, useState } from "react";
import "./PictureList.css";

interface IPicture {
  id: string;
  author: string;
  width: string;
  height: string;
  url: string;
  download_url: string;
}

const PictureList: FunctionComponent<IPicture> = () => {
  const [picture, setPicture] = useState<IPicture[]>([]);
  const [limit, setLimit] = useState(3);
  const API = `https://picsum.photos/v2/list/`;
  const unsplashAPI = `http://source.unsplash.com/`;
  const regex = new RegExp("^(.*)/([^/]*)$");
  const MAX_LIMIT = 30;

 
  const getPhotosFromApi = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setPicture(data);
    } catch (e) { console.log(e)
    } finally {
    }
    return { picture };
  };
  useEffect(() => {
    getPhotosFromApi();
  });
  const handleShowMoreImages = () => {
    if (limit <= MAX_LIMIT) {
      setLimit(limit + 3);
    }
  };
  const showLessImages = () => {
    setLimit(3);
}

  return (
    <>
      <div className="columns is-multiline">
        {picture.slice(0, limit).map((x, index) => (
          <>
            <img
              className="column is-one-third"
              src={`${unsplashAPI}${x.url.split(regex)[2]}`}
              alt={x.author}
            ></img>
          </>
        ))}
      </div>
      <div className="columns">
        <button 
          className="margin:left 50px button is-medium is-white is-one-fifth is-responsive column"
          disabled={limit >= MAX_LIMIT}
          onClick={handleShowMoreImages}
        >
          Load More
        </button>
        <button 
          className="button is-medium is-leight is-one-fifth is-responsive column"
          onClick={showLessImages}
        >
          Show Less
        </button>
      </div>
    </>
  );
};
export default PictureList;
