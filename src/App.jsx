import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components';
import routes from './routing/routes';
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route, key) => (
          <Route path={route.path} element={<route.component />} key={key} />
        ))}
      </Routes>
    </div>
  );
};
export default App;
