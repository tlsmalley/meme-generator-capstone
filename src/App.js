import './App.css';
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
  TemperatureSlider
} from './ui-components';

function App() {
  const [caption, setCaption] = useState('');
  const [temperature, setTemperature] = useState(0.5);
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleButtonClick = async() => {
    console.log('sending api call...');
    try {
      const response = await fetch('**api endpoint*', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"uuid": "test-uuid", "text_prompt": caption, "temperature": temperature})
      });
      const data = await response.json();
      setGeneratedImage(data.imageUrl);
      console.log(data);
  } catch (error) {
      console.error('error making API call:', error);
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
         <CaptionInput onChange={handleCaptionChange}></CaptionInput>
         <CallAPI onClick={handleButtonClick}></CallAPI>
         <TemperatureSlider onChange={handleTemperatureChange}></TemperatureSlider>
         <br />
         {generatedImage && <GeneratedMeme imageUrl={generatedImage}></GeneratedMeme>}
         <br />
         <br />
      <NavBarHeaderMemeHero/>
      <br />
      <HeroLayout1/>
      <br />
      <InputBox/>
      <br />
      <GeneratedMeme/>
      <br />
      <MarketingFooter/>
    </div>

  );
}

export default App;
