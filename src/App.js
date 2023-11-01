import './App.css';
//import { ThemeProvider } from '@aws-amplify/ui-react';
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
    <div className="App">
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
