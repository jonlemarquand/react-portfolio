import React, { useState } from "react";


import Layout from '../components/shared/Layout';

import './Contact.scss';

const Contact = () => {
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [showThanks, setShowThanks] = useState(false);

    const submit = e => {
      e.preventDefault()
      fetch(`https://hooks.zapier.com/hooks/catch/7825187/o8b2en5`, {
        method: 'POST',
        body: JSON.stringify({ name, email, comment }),
      })
      .then(setEmail(''), setName(''), setComment(''))
      .then(setShowThanks(true));
    }

    return (
        <Layout>
            <h1>Contact</h1>
            <h2 className="intro-text">Want to get in touch? Use the form below or send me <a href="mailto:jon.lemarquand@gmail.com">an email.</a></h2>
            <div className={showThanks ? 'thanks' : 'hidden'}>Thanks for getting in touch! I'll have a read of your email and be in touch soon.</div>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-group">
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="name">Name:</label>
              </div>
              <div className="form-group">
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="email">Email:</label>
              </div>
              <div className="form-group">
                <textarea name="comment" value={comment} onChange={e => setComment(e.target.value)} />
                <label htmlFor="comment">Message:</label>
              </div>
      <button className="submit-button" type="submit">Send</button>

      <p className="footnote-text">Please note: your name/email will only be used to reply to the message sent.</p>
    </form>
        </Layout>
    )
}

export default Contact;