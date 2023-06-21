import React,{useState} from 'react'
import './App.css';
import Search from './Search';
const App=()=>{
  const [search,setSearch]=useState('');
  const [show,setShow]=useState(false);
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(search)
    setShow(true);
  }
  return(
    <div className="main-page">
      <center>
      <h1>Search For Vehicles</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={search} placeholder="search here..." onChange={(e)=>{setSearch(e.target.value)
}}/><br/><br/>
        <input  className="submit" type="submit"/>
      </form>
      </center>
      { show && <Search search={search} />}
    </div>
  )
}
export default App;