
export const NavBar = ({ handleChange }) => {
    return (
        <div className="navbar">
            <input onChange={ (e) => handleChange(e.target.value)} type="text" placeholder='Search User...'/>
        </div>
    )
}