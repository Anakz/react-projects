import './App.css';
import React,{useState} from 'react';
import AffC from './components/affC/AffC';
import AffB from './components/affB/AffB';

function App() {
  const [compte, setCompte] = useState(0);

  const inc = () =>
   {
    return setCompte(compte => compte +1);
   }

   const dec= () =>
   {
    return setCompte(compte => compte -1);
   }

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-body">

          <AffC compte={compte}/>
          <AffB inc={inc} dec={dec}/>

        </div>
      </div>
    </div>
  );
}

export default App;
