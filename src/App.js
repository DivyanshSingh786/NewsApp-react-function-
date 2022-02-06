import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=>{
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NOT_SECRET_CODE;
  // apiKey = "353b24b944f6474b9f34529cffd0d234";

  const [progress, setProgress] = useState(0);
  
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <NavBar />
          <Routes>
            
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} appiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} appiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} appiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} appiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} appiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} appiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} appiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
