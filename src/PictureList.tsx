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
  const API = `https://picsum.photos/v2/list`;
  
  const getPhotosFromApi = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setPicture(data);
    } catch (e) {
      console.log(e);
    }
    return picture;
  };
  useEffect(() => {
    getPhotosFromApi();
  });

  return (
    <>
      <div>
        {picture.map((x) => (
          <>
            <div>{x.id}</div>
            <div>{x.author}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default PictureList;
