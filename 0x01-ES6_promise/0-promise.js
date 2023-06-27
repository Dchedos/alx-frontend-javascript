  // Some logic here
  return new Promise((resolve, reject) => {
    // Some logic here
    if (/* some condition */) {
      resolve(/* some value */);
    } else {
      reject(/* some error */);
    }
  });
}

// To use the function, we can either use then/catch or async/await syntax
// Using then/catch
getResponseFromAPI()
  .then((value) => {
    // Do something with the value
  })
  .catch((error) => {
    // Handle the error
  });

// Using async/await
(async () => {
  try {
    let value = await getResponseFromAPI();
    // Do something with the value
  } catch (error) {
    // Handle the error
  }
})();

