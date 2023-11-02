import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

//import { ThemeProvider } from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import {
  MemeCardCollection,
  CaptionInput,
  CallAPI,
  HeroLayout1,
  GeneratedMeme,
  InputBox,
  NavBarHeaderMemeHero,
  MarketingFooter,
  TemperatureSlider,
  TemperatureInput
} from './ui-components';

function App() {
  const [caption, setCaption] = useState('');
  const [temperature, setTemperature] = useState(0.5);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async() => {
    console.log('sending api call...');
    setIsLoading(true);

    const randomUuid = Math.random().toString(36).substring(2, 12);

    try {
      const response = await fetch('https://cozpvp5akqiqq43lfnfffw6xee0npezn.lambda-url.us-west-2.on.aws/', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"uuid": randomUuid, "text_prompt": caption, "temperature": temperature})
      });
      const data = await response.json();
      setGeneratedImage(data.imageUrl);
      console.log(data);
  } catch (error) {
      console.error('error making API call:', error);
  } finally {
    setIsLoading(false); //set back at false when image loads
  }

};

const handleCaptionChange = (event) => {
  setCaption(event.target.value);
};

const handleTemperatureChange = (newValue) => {
  setTemperature(newValue);
};

  return (
    <div className="App">
          <NavBarHeaderMemeHero/>
          <br />
          <HeroLayout1/>
          <br />
          <input
              type="text"
              placeholder="Making memes is fun"
              value={caption}
              onChange={handleCaptionChange}
          />
          <input
              type="number"
              placeholder="Set temperature"
              value={temperature}
              onChange={handleTemperatureChange}
              min="0"
              max="1"
              step="0.1"
          />
         <CallAPI onClick={handleButtonClick}></CallAPI>
         <br />
         {isLoading && !generatedImage && <div>Loading image...</div>}
         {generatedImage && <GeneratedMeme imageUrl={generatedImage}></GeneratedMeme>}
         <br />
         <MarketingFooter/>
         <br />

      <br />
      <InputBox/>
      <GeneratedMeme/>
      <br />
      
    </div>

  );
}

export default App;
