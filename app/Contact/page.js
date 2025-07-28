import React from 'react';

export default function ContactPage() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Contact Us</h1>
        <p className="lead text-body-secondary">We'd love to hear from you!</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-dark text-light border-secondary shadow-lg">
            <div className="card-body p-5">
              <h3 className="card-title text-center mb-4">Get in Touch</h3>
              <p className="text-center text-body-secondary">
                This project was created as part of a task to begin a freelance job. You can find the source code and connect with me through the links below.
              </p>
              <hr className="my-4" />
              <div className="d-flex flex-column align-items-center">
                <p><strong>Developer:</strong> Mohammed Al-Qura'an</p>
                <p><strong>Email:</strong> <a href="mailto:mohammad.quraan@yahoo.com" className="text-warning">mohammad.quraan@yahoo.com</a></p>
                <div className="mt-3">
                  <a href="https://wa.me/00962796462690" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-2">
                    <i className="bi bi-whatsapp"></i> WhatsApp
                  </a>
                  <a href="https://www.linkedin.com/in/mohammed-al-qura-an-6956b1150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-2">
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>
                  <a href="https://www.facebook.com/share/1CLQ3dhsqp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                    <i className="bi bi-facebook"></i> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}