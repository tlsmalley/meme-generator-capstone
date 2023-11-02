import './App.css';
//import { ThemeProvider } from '@aws-amplify/ui-react';
import {
  MemeCardCollection,
  CaptionInput,
  CallAPI,
  HeroLayout1,
  GeneratedMeme,
  InputBox,
  NavBarHeaderMemeHero,
  MarketingFooter
} from './ui-components';

function App() {
  const handleButtonClick = async() => {
    console.log('sending api call...');
    try {
      const response = await fetch('**api endpoint*', {
          method: 'POST', 
          headers: {
          },
          body: JSON.stringify({"uuid": "test-uuid", "text_prompt": "i love aws", "temperature": 0.1})
      });
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('error making API call:', error);
  }

};

  return (
    <div className="App">
         <CaptionInput></CaptionInput>
         <CallAPI></CallAPI>
         <br />
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
