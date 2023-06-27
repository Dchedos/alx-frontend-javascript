function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const response = 'API response data';
      // Resolve the Promise with the response
      resolve(response);
      
      // Reject the Promise (uncomment the lines below to simulate an error)
      // const error = 'An error occurred while fetching data from API';
      // reject(error);
    }, 2000); // Simulating a delay of 2 seconds
  });
}
