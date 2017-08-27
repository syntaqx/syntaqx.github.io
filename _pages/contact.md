---
permalink: /contact/
title: Contact
tagline: >
  Have questions? I might have answers.
---

<p>Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you within 24 hours!</p>

<div class="row justify-content-md-center">
  <div class="col col-md-6">
    <div class="card">
      <div class="card-body">
        <form id="contact-form" method="post" action="" role="form">
          <fieldset class="form-group">
            <label for="inputName">Name</label>
            <input type="text" class="form-control" id="inputName" name="name">
          </fieldset>
          <fieldset class="form-group">
            <label for="inputEmail">Email Address</label>
            <input type="email" class="form-control" id="inputEmail" name="email" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">Your email is only used as a return address for communication and will not be shared with anyone.</small>
          </fieldset>
          <fieldset class="form-group">
            <label for="inputPhone">Phone</label>
            <input type="text" class="form-control" id="inputPhone" name="phone">
          </fieldset>
          <fieldset class="form-group">
            <label for="inputMessage">Comment</label>
            <textarea class="form-control" id="inputMessage" name="message" rows="8"></textarea>
          </fieldset>
          <div>
            <button type="submit" class="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
