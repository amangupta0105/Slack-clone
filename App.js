import UserContextProvider from './context/UserContextProvider';
import NavBar from './pages/NavBar'
function App() {
  return (
    <div className="App">
      <UserContextProvider>
          <NavBar/>
      </UserContextProvider>
    </div>
  );
}

export default App;
