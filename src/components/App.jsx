import { Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';
import Home from './Home';

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/greeting" element={<Greeting />} />
        </Routes>
    )
}

export default App;