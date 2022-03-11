import { FunctionComponent, useEffect, useState } from "react";
import "./PictureList.css";

interface IPicture {
  id: string;
  author: string;
  width: string;
  height: string;
  url: string;
  download_url: string;
  urlArray: string[];
}

const PictureList: FunctionComponent<IPicture> = () => {
  const [picture, setPicture] = useState<IPicture[]>([])
  const [urlMap, seturlMap] = useState<string[]>([])
  const API = `https://picsum.photos/v2/list`
  const unsplashAPI = `http://source.unsplash.com/`
  const regex = new RegExp('^(.*)/([^/]*)$')

  
  const getPhotosFromApi = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setPicture(data);
    } catch (e) {
      console.log(e);
    } finally {
    }
    return { picture, urlMap };
  }
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
            <div>{x.width}</div>
            <div>{x.height}</div>
            <img src={`${unsplashAPI}${x.url.split(regex)[2]}`} alt="data_photo"></img>
            <div>{x.url}</div>
            <div>{x.download_url}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default PictureList;

/*# Workate — Frontend Task

The task is to write a web app that will fetch list of photos, and display first 3 of them – side by side.

Few things to keep in mind:

- Fetch list of photos from this URL: `https://picsum.photos/v2/list`
- To render an image from unsplash you can use `http://source.unsplash.com/{SLUG}` (for example [http://source.unsplash.com/yC-Yzbqy7PY](http://source.unsplash.com/yC-Yzbqy7PY))
- You'll find image's `{SLUG}` in the `url`, in the API response (you need to extract it).
- Use either plain JavaScript/TypeScript or React (preferable)
- It doesn’t have to be multi-browser-compatible, Chrome is enough
- Create [Github](https://github.com/) repository and push the code there
- Publish it so it's accessible online on e.g Github pages, Vercel, Netlify, Heroku etc.
- Send us back a link to the newly created repository anda  published page.

If you want to earn **extra points** you can:
- Add a “Next” button. After clicking it the app should display next 3 images (append to the list or replace the current one)
- Include any of these technologies:
    - ES6
    - TypeScript
    - React
    - Webpack
    - LESS

# Tips

---

### For fetching we suggest to use:

- [Built-in Fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

### For displaying images side by side you can use CSS Grid or Flexbox

- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

### Github tutorial

- [First steps w/ Github](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

### JavaScript intro

- [Full guide intro to JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)*/
