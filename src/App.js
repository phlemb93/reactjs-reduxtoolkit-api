import { Cake } from "./features/cake/Cake"
import { Burger } from "./features/burger/Burger"
import { NavBar } from "./features/searchValue/NavBar"
import { User } from "./features/user/User"
import { useState } from "react"

function App() {

  return (
 
    <>
      <h2>My Users List</h2>
      {/* <Cake />
      <Burger /> */}
      <NavBar />
      <User />
    </>
  );
}

export default App;
