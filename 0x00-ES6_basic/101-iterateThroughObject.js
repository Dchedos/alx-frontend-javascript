export default function iterateThroughObject(reportWithIterator) {
  if (!reportWithIterator) {
    console.log('Placeholder');
  }
}

export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to store the names
  let names = [];
  // Loop through the iterator object
  for (let item of reportWithIterator) {
    // Push each name to the array
    names.push(item);
  }
  // Join the array elements with | and return the string
  return names.join(" | ");
}
