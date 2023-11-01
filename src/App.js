import './App.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import {
  MemeCardCollection,
  HeroLayout1,
  GeneratedMeme,
  InputBox,
  NavBarHeaderMemeHero,
  MarketingFooter
} from './ui-components';

function App() {
  return (
    <ThemeProvider>
    <div className="App" style="font-family:Montserrat" >
      <NavBarHeaderMemeHero/>
      <br />
      <HeroLayout1/>
      <br />
      <InputBox/>
      <br />
      <GeneratedMeme/>
      <br />
      <MarketingFooter/>
    </div></ThemeProvider>
  );
}

export default App;
