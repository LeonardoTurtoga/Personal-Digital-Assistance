import React from 'react';
import { Header } from './component/Pedias';
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
import 'bulma/css/bulma.css'

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="tilte">
          Personal Display Assitant
          </p>
        </div>
      </section>


      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
            <Header 
            title='Alexa' 
            handle='@alexa99' 
            image={AlexaImage}
            description="Alexa was created by Amazon and helps ypu buy things."
            />

            </div>
            <div className="column is-4">
            <Header 
            title='cortana' 
            handle='@cortana32' 
            image={CortanaImage} 
            description="Cortana was made bu Microsoft. Who knows what it does?"
            />

            </div>
            <div className="column is-4">
            <Header 
            title='siri' 
            handle='@siri01' 
            image={SiriImage} 
            description="siri was made by Apple abd is being phased out." 
             />

            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
