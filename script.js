//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const submitBtn = document.getElementById('submitBtn');
  const termsCheckbox = document.getElementById('terms');
  
  // Disable submit button initially
  submitBtn.disabled = true;
  
  // Function to check if all form fields are valid
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const termsChecked = termsCheckbox.checked;
    
    // Enable submit button if all fields are filled and checkbox is checked
    if (name !== '' && email !== '' && phone !== '' && termsChecked) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = 1;
    } else {
      submitBtn.disabled = true;
      submitBtn.style.opacity = 0.6;
    }
  }
  
  // Listen for changes in the checkbox and form fields
  termsCheckbox.addEventListener('change', validateForm);
  form.addEventListener('input', validateForm);
});

