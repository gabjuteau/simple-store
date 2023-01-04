import {useRef} from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6a0ej8f', 'template_audwrdq', form.current, 'r6w_nMgL5XFkLiU7z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return (
        <section>
            <div className="container">
                <h2 className="--text-center">Contact Us</h2>

                <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
                    <input type="text" placeholder="Full Name" name="user_name" required></input>
                    <input type="email" placeholder="Email" name="user_email" required></input>
                    <input type="text" placeholder="Subject" name="subject" required></input>
                    <textarea name="message" cols="30" rows="10"></textarea>

                    <button type="submit" className="--btn --btn-primary">Send Message</button>

                </form>
            </div>  
        </section>
    )
}

export default Contact