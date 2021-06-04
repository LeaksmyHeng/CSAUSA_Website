window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var eventsContact = document.getElementById("eventsContact");
  // var button = document.getElementById("my-form-button");
  var btn = document.getElementById("form-submit");
  var senderEmail = eventsContact.email.value;
  var senderName = eventsContact.name.value;
  var senderMessage = document.getElementById("comments").value;

  eventsContact.addEventListener("submit", function (ev) {
      Email.send({
        SecureToken: "cbc604db-b1ee-44ca-b2f8-960e9c0575af",
        To: "testcsausa@gmail.com",
        From: senderEmail,
        Subject: "Contact Us by Our Prospective Member",
        Body: "Name:" + senderName + "<br/>Email: " + senderEmail + "<br/>Comments: " + senderMessage
      }).then(msg => alert("Your message was successfully sent"))
      $("#eventsContact").trigger("reset");
      // window.location.reload();
    });


  })




// window.addEventListener("DOMContentLoaded", function () {
//   // get the form elements defined in your form HTML above

//   var form = document.getElementById("contact");
//   // var button = document.getElementById("my-form-button");
//   var status = document.getElementById("form-submit");

//   // Success and Error functions for after the form is submitted

//   function success() {
//     form.reset();
//     status.classList.add("success");
//     status.innerHTML = "Thanks!";
//   }

//   function error() {
//     status.classList.add("error");
//     status.innerHTML = "Oops! There was a problem.";
//   }

//   // handle the form submission event

//   form.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// });

// // helper function for sending an AJAX request

// function ajax(method, url, data, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Accept", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       success(xhr.response, xhr.responseType);
//     } else {
//       error(xhr.status, xhr.response, xhr.responseType);
//     }
//   };
//   xhr.send(data);
// }
