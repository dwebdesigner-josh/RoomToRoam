document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('message');

    // Convert FormData to URL-encoded string
    const urlEncodedData = new URLSearchParams(formData).toString();


    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Specify URL-encoded content type
        },
        body: urlEncodedData, // Use URL-encoded string as the body
      });

      // Ensure response is in JSON format and read it
      const contentType = response.headers.get('content-type');
      let responseJson = {};

      if (contentType && contentType.includes('application/json')) {
        try {
          responseJson = await response.json();
        } catch (jsonError) {
          console.error('Failed to parse JSON:', jsonError);
          messageDiv.innerHTML = `<p class="error">Failed to parse server response.</p>`;
          return;
        }
      } else if (contentType && contentType.includes('text/html')) {
        // Handle HTML response (e.g., Cloudflare 504 error page)
        const responseText = await response.text(); // Read as text
        console.error('Unexpected response format (HTML):', responseText);
        messageDiv.innerHTML = `<p class="error">The server took too long to respond. Please try again later.</p>`;
        return;
        
      } else {
        const responseText = await response.text(); // Read as text if not JSON
        console.error('Unexpected TESTESETESTETST format:', responseText);
        messageDiv.innerHTML = `<p class="error">Unexpected response format.</p>`;
        return;
      } 
      // removed as this is sensitive info that shouldn't show up for viewers of the site, and looks horrible:         
      // messageDiv.innerHTML = `<p class="error">Unexpected REMOVED format. Response: ${responseText}</p>`;


      if (response.ok) {
        // Display success message
        messageDiv.innerHTML = `<p class="success">${responseJson.message || 'Form submitted successfully'}</p>`;
        
        form.reset(); // Reset the form after successful submission
        initializeContactInputs(); // Call the function to reset contact input visibility
        initializeReasonInput();    // Call the function to reset reason input visibility
              //^^^ NOTE FOR FUTURE AS THESE initialize FUNCTIONS ARE FROM THE 1st SCRIPT NOT THIS ONE - 
              //Just make sure that the functions are defined and accessible in the same scope where you are calling them. 
              //Since you did not combine the scripts, as long as those functions are defined in the global scope (or the same script), it will work without issues.
            
      } else {
        // Handle and display validation errors
        const errors = responseJson.errors || [{ msg: 'An unknown error occurred.' }];
        console.error('Form submission error:', errors.map(err => err.msg).join(', '));

       
      } //REMOVED FROM VISIBLE PAGE messageDiv.innerHTML = `<p class="error">${errors.map(err => err.msg).join(', ')}</p>`;

    } catch (error) {
      messageDiv.innerHTML = `<p class="error">An unexpected error occurred: ${error.message}</p>`;
    }
    
    // Function to remove the <p> with class "success" after 3 seconds
function removeSuccessMessage() {
  // Select the <p> element with the class "success"
  const successMessage = document.querySelector('p.success');

  // Check if the element exists
  if (successMessage) {
      // Set a timeout to remove the element after 3 seconds
      setTimeout(() => {
          successMessage.remove(); // Remove the element from the DOM
      }, 5000); // 5000 milliseconds = 5 seconds
  }
}

// Call the function to start the process
removeSuccessMessage();
  });