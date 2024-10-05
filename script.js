document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phoneNo").value;
    const address = document.getElementById("address").value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Address: " + address);
});