import {useRef} from "react";
import emailjs from "@emailjs/browser";

function Contact({type}) {
  const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();
    
    const template_type = (type == "contact-us") ? "template_audwrdq" : "template_k5pvap2";

    emailjs.sendForm("service_6a0ej8f", template_type, form.current, "r6w_nMgL5XFkLiU7z")
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <section className="flex-columns center">
      <div className="row">
        <div className="column">
            <div className="column-1 bg-light">
              <h2>Contact Us</h2>

              <form ref={form} onSubmit={sendEmail} className="callback-form">
              <div className="form-control">
                <input type="text" placeholder="Full Name" name="user_name" required></input>
              </div>

              <div className="form-control">
                <input type="email" placeholder="Email" name="user_email" required></input>
              </div>

              <div className="form-control">
                <input type="text" placeholder="Subject" name="subject" required></input>
              </div>

              <div className="form-control">
                <textarea name="message" cols="30" rows="10"></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>

              </form>
            </div>
        </div>
      </div>  
    </section>
  );
}

export default Contact;