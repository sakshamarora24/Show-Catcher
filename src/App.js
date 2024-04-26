
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Overview from './Pages/Overview';
import Summary from './Pages/Summary';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Overview/>} />
                <Route path="/show/:id" element={<Summary/>} />
            </Routes>
        </Router>
    );
};

export default App;

