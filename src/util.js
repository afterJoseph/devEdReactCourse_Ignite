// Media Resize
export const smallImage = (imgPath, size) => {
  if (!imgPath)
    return "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png";
  const img = imgPath.match(/media\/screenshots/)
    ? imgPath.replace(
        "/media/screenshots",
        `/media/resize/${size}/-/screenshots`
      )
    : imgPath.replace("media/games", `media/resize/${size}/-/games`);
  return img;
};
