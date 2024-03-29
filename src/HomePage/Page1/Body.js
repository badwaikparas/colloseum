import React from 'react'
// import { useNavigate } from 'react-router-dom'


function Body() {
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     // navigate('/your-target-page'); // Replace with the actual path
    //     console.log("View Challenges")
    // };
    const handleClick = () => {
        alert("View Challenges"); // This line will be executed on click
    };
    return (
        <>
            <div>
                Capture The Flag
            </div>
            <div>
                SemiColon Tech Club
            </div>
            <button type="button" autoFocus onClick={handleClick}>VIEW CHALLENGES</button>
        </>
    )
}

export default Body