import { Cake } from "./features/cake/Cake"
import { Burger } from "./features/burger/Burger"
import { NavBar } from "./features/searchValue/NavBar"
import { User } from "./features/user/User"
import { useState } from "react"

function App() {

  const [searchValue, setSearchValue] = useState('')

  const handleChange = (value) => {
    console.log(value)
      setSearchValue(value)
  }


  return (
    <>
      <h2>My Users List</h2>
      {/* <Cake />
      <Burger /> */}
      <NavBar handleChange={ handleChange } />
      <User searchValue={ searchValue } />
    </>
  );
}

export default App;
