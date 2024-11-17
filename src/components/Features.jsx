import React from 'react'; 
import telefon from '../assets/images/Loggar/telefonsida2.svg';
import creditcard from '../assets/images/Loggar/creditcard.svg';
import datasecurity from '../assets/images/Loggar/datasecurity.svg';
import coststatistics from '../assets/images/Loggar/coststatistics.svg';
import support24 from '../assets/images/loggar/support24.svg';
import regularcashback from '../assets/images/loggar/regularcashback.svg';
import happy from '../assets/images/loggar/happy.svg';

function Features() {
  return (
    <section aria-label="App features" className="features">
      <div className="container">
        <div className="iphone">
          <img src={telefon} alt="iPhone with app" />
        </div>
        <div className="text space-y-3">
          <h2 className="h1">App Features</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-container">
                <img src={creditcard} alt="Easy Payments" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Easy Payments</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="feature-card">
        <div className="icon-container">
          <img src={datasecurity} alt="logo2" />
        </div>
        <div className="space-y-1">
        <h3 className="h5">Data Security</h3>
        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="icon-container">
          <img src={coststatistics} alt="cost" />
        </div>
        <div className="space-y-1">
        <h3 className="h5">Cost Statistics</h3>
        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="icon-container">
          <img src={support24} alt=""/>
        </div>
        <div className="space-y-1">
        <h3 className="h5">Support 24/7</h3>
        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="icon-container">
          <img src={regularcashback} alt="" />
        </div>
        <div className="space-y-1">
        <h3 className="h5">Regular Cashback</h3>
        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="icon-container">
          <img src={happy} alt="" />
        </div>
        <div className="space-y-1">
        <h3 className="h5">Top Standards</h3>
        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
        </div>
      </div>

          </div>
        </div>
      </div>
      
      
      

    </section>

  );
}

export default Features;