import './App.css';
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
    <div className="App" >
      <NavBarHeaderMemeHero/>
      <HeroLayout1/>
      <InputBox/>
      <GeneratedMeme/>
      <MarketingFooter/>
    </div>
  );
}

export default App;
