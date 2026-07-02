import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

export const config = {
  endpoint: `https://qtify-backend.labs.crio.do`,
};
const sections =[{title:"Top Albums", url:"/albums/top"},
  {title:"New Albums", url:"/albums/new"}
]
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {sections.map((section)=><Section title={section.title} api={section.url}/>)}
    </div>
  );
}

export default App;
