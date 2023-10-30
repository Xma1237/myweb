import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle"></span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">Carterma29@gmail.com</span>
            </div>
        
            <div className="contact__card">
              <i className="bx bxl-meta contact__card-icon"></i>

              <h3 className="contact__card-title">Facebook</h3>
              <span className="contact__card-data">Xiangyu Ma</span>           
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">linkedin.com/in/xiangyu-ma-a9905016a</span>           
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
