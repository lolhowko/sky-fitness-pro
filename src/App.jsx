import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from './components/store/store';
import { AppRoutes } from "./components/routes/routers";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}
export default App;