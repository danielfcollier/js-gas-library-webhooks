function GetData(e, dtoPost) {
  const data = JSON.parse(e.postData.contents);

  if (dtoPost) {
    return dtoPost(data);
  }

  return data;
}
