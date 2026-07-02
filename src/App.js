import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

export const config = {
  endpoint: `https://qtify-backend.labs.crio.do`,
};
const sections =
[
  {
    title: "Top Albums",
    url: "/albums/top",
    type: "album",
  },
  {
    title: "New Albums",
    url: "/albums/new",
    type: "album",
  },
  {
    title: "Songs",
    url: "/songs",
    type: "song",
  },
];
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {sections.map((section)=>
      <Section key={section.title} 
      title={section.title} api={section.url} 
      type={section.type}/>
      )}
    </div>
  );
}

export default App;
