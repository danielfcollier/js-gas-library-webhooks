function integrationTest() {
  {
    function doPost(e) {
      const dto = data => { return { a: data.a } };
      const data = GetData(e, dto);

      // Webhook routine
      try {
        console.log({ data });
      } catch (err) {
        console.error("Error during Webhook operation!");
        console.error(e);
      }
    }

    const e = {
      postData: {
        contents: JSON.stringify({ a: 1, b: 2 })
      }
    };
    doPost(e);
  }
}
