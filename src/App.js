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
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
      <NavBarHeaderMemeHero/>
      <HeroLayout1/>
      <InputBox/>
      <GeneratedMeme/>
    </div>
  );
}

export default App;
