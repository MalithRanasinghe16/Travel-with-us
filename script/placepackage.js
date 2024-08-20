document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    var packageSelect = document.getElementById("package");
    var packageName = packageSelect.options[packageSelect.selectedIndex].text;
    var packagePrice = packageSelect.value.split("-")[1];
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var numberOfPeople = document.getElementById("number-of-people").value;
    var totalPrice = packagePrice * numberOfPeople;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var zip = document.getElementById("zip").value;
  
    
    var bookingDetails = "Thank you for booking your trip!\nWe will Send your tickets as soon as we can\n\nPackage: " + packageName + "\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nNumber of Tickets: "+ numberOfPeople +"\nTotal Price: $" + totalPrice;
    alert(bookingDetails); // Display an alert message with booking details
  });