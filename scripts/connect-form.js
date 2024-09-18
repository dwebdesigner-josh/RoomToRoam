// Function to initialize the display of contact inputs based on the default checked radio button
function initializeContactInputs() {
    const preferredContact = document.querySelector('input[name="preferredcontact"]:checked');
    if (preferredContact) {
      document.querySelectorAll('.contact-input').forEach(input => input.style.display = 'none');
      const selectedInput = document.getElementById(preferredContact.value + '-input');
      if (selectedInput) {
        selectedInput.style.display = 'block';
      }
    }
  }

  // Function to initialize the display of reason input based on the default checked radio button
  function initializeReasonInput() {
    const contactReason = document.querySelector('input[name="contactreason"]:checked');
    const reasonInput = document.getElementById('reason-other-input');
    if (contactReason) {
      reasonInput.style.display = contactReason.value === 'other' ? 'block' : 'none';
    }
  }

  // Event listener for the "How do you want to be contacted?" section
  document.querySelectorAll('input[name="preferredcontact"]').forEach(radio => {
    radio.addEventListener('change', function() {
      document.querySelectorAll('.contact-input').forEach(input => input.style.display = 'none');
      const selectedInput = document.getElementById(this.value + '-input');
      if (selectedInput) {
        selectedInput.style.display = 'block';
      }
    });
  });

  // Event listener for the "How can we help you?" section
  document.querySelectorAll('input[name="contactreason"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const reasonInput = document.getElementById('reason-other-input');
      reasonInput.style.display = this.value === 'other' ? 'block' : 'none';
    });
  });

    // Event listener for label clicks
    document.querySelectorAll('label').forEach(label => {
    label.addEventListener('click', () => {
      const radioId = label.getAttribute('for');
      const radioInput = document.getElementById(radioId);
      if (radioInput) {
        radioInput.checked = true;
        // Manually trigger the change event
        radioInput.dispatchEvent(new Event('change'));
      }
    });
  });

  // Initialize the displays on page load
  document.addEventListener('DOMContentLoaded', () => {
    initializeContactInputs();
    initializeReasonInput();
  });