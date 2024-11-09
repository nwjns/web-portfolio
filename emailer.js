document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_ilnnl4x", "template_145w4u2", {
        name: name,
        email: email,
        message: message,
      })
      .then(
        function (response) {
          alert("Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("Message sent failed. Try again", error);
        }
      );
  });
});
