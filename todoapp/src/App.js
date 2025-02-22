import { useState } from 'react';
import './App.css';
import { getAutoCompleteData } from './getAutoCompleteData';

function App() {
  const [respData, setRespData] = useState([]);
  const handleAutoCompleteSearch = async (event) => {
    console.log(event.target.value);
    const dataResp = await getAutoCompleteData(event.target.value);
    setRespData(event.target.value && (dataResp || []));
  }
  return (
    <div className="App">
      <h2>Autocomplete Search Bar</h2>
      <input type="text" id="searchbox" className='searchbox' onKeyUp={handleAutoCompleteSearch}/>
      <br/>
      { respData && 
        <div id="respdata" className='respdatadiv'>
          {respData.map((item,index)=>{
            return <><span key={`${item.name}_${index}`} className='suggesteditems' onKeyDown>{item.name}</span><br/></>
          })}
        </div>
      }
    </div>
  );
}

export default App;
