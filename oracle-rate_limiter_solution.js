/*

We’re going to tackle a problem we’ve run into: we need to make calls to a 3rd party API while respecting their rate limits.

You are working with a single rate-limited API that allows 100 requests per hour.

Please implement a function, consumeRateLimit(), that returns a boolean that represents if we can make another request. This function should encapsulate the logic of how many requests have been made so far. The function should return false if making the call would put you over the call limit for the past hour and true otherwise.

*/

const MAX_HOURLY_REQUESTS = 100;

// Variable used to store times of previous successful API calls
const previousCalls = [];

/*
  If we are over the current rate limit, return false.  Otherwise,
  Increment our counter and return true.
*/
function consumeRateLimit() {
  const currentTime = Math.floor(Date.now() / 1000);
  
  // Remove times of API calls that occurred over an hour ago, as these are no longer relevant
  for (let i = previousCalls.length - 1; i >= 0; i--) 
  {
    if (currentTime - previousCalls[i] >= 3600) {
      previousCalls.splice(i, 1);
    }
  }
  
  // Now we know that all calls in previousCalls were within the last hour, return false if the length of the
  // list is equal to or greater than the maximum number of hourly requests
  if (previousCalls.length >= MAX_HOURLY_REQUESTS) {
    return false;
  }
  
  // Record the time of this call, which is being allowed
  previousCalls.push(currentTime);
  
  return true;  
}

console.log(consumeRateLimit());
