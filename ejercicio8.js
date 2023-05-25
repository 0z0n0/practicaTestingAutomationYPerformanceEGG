document.getElementById('employee-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset error messages
    document.getElementById('email-error').textContent = '';
    document.getElementById('age-error').textContent = '';
    
    // Get form values
    var email = document.getElementById('email').value.trim();
    var age = document.getElementById('age').value.trim();
    
    // Validate email format
    var emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      document.getElementById('email-error').textContent = 'Correo electrónico inválido.';
    }
    
    // Validate age
    if (isNaN(age) || age <= 0) {
      document.getElementById('age-error').textContent = 'Edad inválida. Debe ser un número mayor a 0.';
    }
  });
  