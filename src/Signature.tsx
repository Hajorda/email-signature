* {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

body {
  background: #333;
  color: hsl(200, 100%, 90%);
  padding: 1rem;
  margin: 0;
}

.new-item-form {
  max-width: 400px; /* Set maximum width for the form */
  margin: 0 auto; /* Center the form horizontally */
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btn {
  background: hsl(200, 100%, 50%, 0.1);
  border: 1px solid hsl(200, 100%, 50%);
  color: hsl(200, 100%, 50%);
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
  outline: none;
}

.btn:hover,
.btn:focus-visible {
  background: hsl(200, 100%, 50%, 0.2);
}

.btn.btn-danger {
  background: hsl(0, 100%, 40%, 0.1);
  border: 1px solid hsl(0, 100%, 40%);
  color: hsl(0, 100%, 40%);
}

.btn.btn-danger:hover,
.btn.btn-danger:focus-visible {
  background: hsl(0, 100%, 40%, 0.2);
}

.new-item-form input {
  outline: none;
  border: 1px solid hsl(200, 100%, 40%);
  background: hsl(200, 100%, 30%);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  color: hsl(200, 100%, 90%);
}

.new-item-form input:focus {
  border: 1px solid hsl(200, 100%, 70%);
}

.signature-preview-box {
  background-color: #fff; /* Set background color to white */
  padding: 1rem; /* Add padding for spacing */
  border-radius: 0.5rem; /* Add border-radius for rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box shadow for depth */
  margin-top: 1rem; /* Add margin for spacing */
}

.signature-preview-box img {
  max-width: 100%;
  height: auto;
}

.signature-preview-box table {
  width: 100%;
}

.signature-preview-box td {
  vertical-align: top;
}

.signature-preview-controls {
  margin-top: 1rem; /* Add margin for spacing between button and preview */
}

.made-by {
  color: #fff; /* Change text color to white */
  text-align: center; /* Center align the text */
  margin-top: 1rem; /* Add margin at the top */
}

.made-by a {
  color: #fff; /* Change link color to white */
}

.made-by a:hover {
  text-decoration: underline; /* Add underline on hover */
}

/* Media queries for responsiveness */
@media only screen and (max-width: 600px) {
  .new-item-form {
    max-width: 90%; /* Set maximum width to 90% for smaller screens */
  }
}
