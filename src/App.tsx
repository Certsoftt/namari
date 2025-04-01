import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { routes } from './router/router';
function App() {
  
  return (
    <React.Fragment>
      <React.Suspense fallback="....loading">
        <Routes>
          {routes.map(route=>
            <Route key={route.id} exact={route.exact} path={route.path} component={React.lazy(()=>import(`../src/components/${route.component}`))}/>
          )}
        </Routes>
      </React.Suspense>
      
    </React.Fragment> 
  );
}

export default App;
