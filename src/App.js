import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

//import { ThemeProvider } from '@aws-amplify/ui-react';
import React, { useState , useEffect } from 'react';
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
      if (response.ok) {
        const data = await response.json(); // Assuming the response is JSON
        setGeneratedImage(data.imageUrl); // Assuming data.imageUrl holds the URL to the image
        console.log(data);
      } else {
        console.error('HTTP error:', response.status);
      }
    } catch (error) {
      console.error('error making API call:', error);
    } finally {
      setIsLoading(false); // Set back to false when image loads or fails to load
    }

};

useEffect(() => {
  // This will be called when the component is unmounted or when generatedImage changes
  return () => {
    if (generatedImage) {
      URL.revokeObjectURL(generatedImage); // Free up memory when the image is no longer needed
    }
  };
}, [generatedImage]);
const handleCaptionChange = (event) => {
  const newTemperature = parseFloat(event.target.value);
  if (!isNaN(newTemperature)) {
    setTemperature(newTemperature);
  }
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
          
          <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
          <input
              type="text"
              placeholder="Making memes is fun"
              value={caption}
              onChange={handleCaptionChange}
              style={{ width: '75%%', padding: '10px' }}
          /></div>
          <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
          <input
              type="number"
              placeholder="Set temperature"
              value={temperature}
              onChange={handleTemperatureChange}
              min="0"
              max="1"
              step="0.1"
              style={{ width: '75%%', padding: '10px' }}
          /></div>
         <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
          <CallAPI onClick={handleButtonClick}></CallAPI></div> Your meme will download when complete.
         <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
         {isLoading && !generatedImage && <div>Loading image... processing may take 1-2 min</div>}
         {generatedImage && <GeneratedMeme imageUrl={generatedImage}></GeneratedMeme>}
         <br /></div>
         <MarketingFooter/>
         <br />
    </div>

  );
}

export default App;
