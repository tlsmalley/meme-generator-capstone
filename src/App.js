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
  const handleButtonClick = () => {
    console.log('Button clicked. Send an API request.');
};

  return (
    <div className="App">
         <CaptionInput></CaptionInput>
         <CallAPI></CallAPI>
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
