function unitTests() {
  const results = {};

  const expected = { a: 1, b: 2, c: 3 }
  const e = {
    postData: {
      contents: JSON.stringify(expected)
    }
  };

  {
    const testName = "GetWebhookData";
    const actual = GetData(e);
    results[testName] = TestFramework.ExpectToBeEqual(testName, expected, actual);
  }

  {
    const testName = "GetWebhookDataThroughDTO";
    const dto = data => { return { a: data.a } };
    const actual = GetData(e, dto);
    results[testName] = TestFramework.ExpectToBeEqual(testName, dto(expected), actual);
  }

  console.log(results);
}
