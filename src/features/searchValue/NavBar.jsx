import { useSelector, useDispatch } from 'react-redux'
import { inputed } from './searchSlice'

export const NavBar = () => {

    const searchValue = useSelector(state => state.search.value)
    const dispatch = useDispatch()

    console.log(searchValue)

    return (
        <div className="navbar">
            <input onChange={ (e) => dispatch(inputed(e.target.value))} type="text" value={searchValue} placeholder='Search User...'/>
        </div>
    )
}