import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/header";
import { store } from './redux/index';
import { GamePage } from './pages/GamePage/GamePage';
import { OrderPage } from "./pages/OrderPage/OrderPage";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route exact path="/react-game-shop" element={<HomePage />} />
                        <Route exact path="/react-game-shop/app/:title" element={<GamePage />} />
                        <Route exact path="/react-game-shop/order" element={<OrderPage />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
