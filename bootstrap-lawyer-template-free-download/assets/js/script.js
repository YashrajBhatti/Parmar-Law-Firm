
      $(document).ready(function(){
        $('.menu-toggle').click(function(){
          $('.menu-toggle').toggleClass('active')
          $('.my-nav-items').toggleClass('active')
        });
      });

      document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the actual form submission
        // Check if all required fields are filled out
        var name = document.forms["contactForm"]["name"].value;
        var email = document.forms["contactForm"]["email"].value;
        var phone = document.forms["contactForm"]["phone"].value;
        
        // Simple validation check (For more comprehensive validation, consider using JS validation libraries or more detailed checks)
        if(name && email && phone) {
            alert("Form submitted successfully!");
            this.reset();
        } else {
            alert("Please fill out all required fields.");
        }
    });

    document.querySelector('.learn-more-btn').addEventListener('click', function() {
      document.getElementById('detailsDialog').style.display = 'block';
  });

  document.querySelector('.dialog-content .close-btn').addEventListener('click', function() {
      document.getElementById('detailsDialog').style.display = 'none';
  });

