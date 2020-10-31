import React, {useState} from 'react';
import "./reset.css";
import GlobalFonts from "./components/01 Atoms/globalStyle";
import AppRoutes from "./components/Routes/approutes";
import HeaderNavigation from "./components/04 Organisms/HeaderNavigation/HeaderNavigation";
import {UserContext} from "./components/Hooks/Providers/Context";


function App() {

    const [value, setValue] = useState(false);

  return (
          <div className="App">

              <UserContext.Provider value={{value, setValue}}>

                  <GlobalFonts/>
                  <AppRoutes />
                  <HeaderNavigation/>

              </UserContext.Provider>

          </div>
  );
}


export default App;

