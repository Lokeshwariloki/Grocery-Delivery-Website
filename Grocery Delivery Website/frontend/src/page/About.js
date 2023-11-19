import React from 'react';

const About = () => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }} id="about">
      <h1 style={{ color: '#FF0000', fontSize: '3rem', paddingTop: '1rem' }}>
        <span>About </span> Us
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }} className="row">
        <div style={{ flex: '1 1 50rem' }} className="content">
          <h3 style={{ color: '#06F555', fontSize: '3.5rem', lineHeight: '1.5', paddingTop: '1rem' }}>We Make Healthy Products In Market</h3>
          <div style={{ flex: '1 1 30rem' }} className="image">
          <img style={{ float:'right', width: '35%', height: '70%' }} src="https://img.freepik.com/free-photo/shopping-cart-with-fruits-vegetables-it_1340-37259.jpg?size=626&ext=jpg&uid=R118692689&ga=GA1.1.184318249.1696047788&semt=ais" alt="" />
        </div>
          <div style={{ background: 'var(--secondary)', height: '.3rem', display: 'inline-block', width: '20%' }} className="divider"></div>
          <p style={{ fontSize: '1.4rem', padding: '1rem 0', color: '#000', lineHeight: '2' }}>
            With a passion for providing the best products and exceptional service, we have grown from a humble start to become a trusted name in
            the world of online groceries. We believe that quality and convenience should never be compromised.
          </p>
          <p style={{ fontSize: '1.4rem', padding: '1rem 0', color: '#000', lineHeight: '2' }}>
            Explore our wide range of products, and let us be your partner in making your kitchen a place where good memories come together.

            <ul>
              <li>Freshness Guaranteed: We source the best produce and products for our customers.</li>
              <li>Convenient Delivery: Enjoy the convenience of having groceries delivered to your doorstep.</li>
              <li>Wide Selection: Choose from a wide range of products, from fresh produce to pantry staples.</li>
              <li>Exceptional Service: Our dedicated team is here to ensure your satisfaction with every order.</li>
            </ul>

          </p>
          <a href="#" style={{ color: '#fff', background: 'var(--primary)', padding: '0.8rem 1.5rem', borderRadius: '5px', textDecoration: 'none' }} className="btn">
            get more
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default About;