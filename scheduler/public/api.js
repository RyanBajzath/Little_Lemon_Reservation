// Example api.js content

/**
 * Simulates fetching available reservation times from an API.
 * @param {string} date - The date for which to fetch available times.
 * @returns {Promise<string[]>} A promise that resolves to an array of available times.
 */
function fetchAPI(date) {
    // Simulate an API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['12:00', '13:00', '14:00']); // Example times
      }, 1000);
    });
  }

  /**
   * Simulates submitting reservation data to an API.
   * @param {Object} formData - The booking form data.
   * @returns {Promise<boolean>} A promise that resolves to true if the submission is successful.
   */
  function submitAPI(formData) {
    // Simulate an API submission with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(formData); // Log the submitted data
        resolve(true); // Simulate a successful submission
      }, 1000);
    });
  }

  // Expose the functions globally if you're including this script in a <script> tag
  window.fetchAPI = fetchAPI;
  window.submitAPI = submitAPI;
