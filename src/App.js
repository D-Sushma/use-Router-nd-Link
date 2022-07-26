//. task--> amazon img & all ko click krne pr 1st page open hona (includee header.js, subheader.js, card.js)
//1.create Home.js compo than import in app.js than inside home.js import(all header, subheader, card.js compo)
// -->>> qki jb amazon img & all ko  click krne pr hamara home.js open hoga & isme sare compo show krenge---------
//2. ctrl+c to stop server & install npm i react-router-dom than check,it show on package.json than open server with npm start
// --->>>>> import router with new version 
// 3. make router ------>>>>>
// "/"-->1st page--> ye hame direct show krega brouser me
// "/home"-->this is route -->browser k is link k sath "/home" add krne pr iska content show hoga 
// 4. <Link> --> kisi bhi btn pr lga skte hai jisse hm is btn ko click krne pr ek se dusre page me chale jaye
// -->>>>(go header.js(amazon img) & subheader.js(all))

import './App.css';
import Home from './components/Home'
import Card from './components/Card'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  
  
  return (
    <div className="App">

      {/* 3. make router----------------- */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
     
    </div>
  );
}
export default App;
