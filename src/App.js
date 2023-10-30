import './App.css';
import {
  MemeCardCollection,
  HeroLayout1,
  GeneratedMeme,
  InputBox,
  NavBarHeaderMemeHero
} from './ui-components';

function App() {
  return (
    <div className="App">
      <h1>this is a test</h1>
      <NavBarHeaderMemeHero/>
      <HeroLayout1/>
      <InputBox/>
      <GeneratedMeme/>
      <MemeCardCollection/>
    </div>
  );
}

export default App;
