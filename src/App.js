import { Route } from 'wouter';
import Home from './pages/Home/Home';
// import Monsters from './components/Monsters/Monsters';
import Comprendium from './pages/Compendium/Compendium';

const App = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/compendium" component={Comprendium} />
      <Route path="/compendium/:index" component={Comprendium} />
    </>
  );
};

export default App;
