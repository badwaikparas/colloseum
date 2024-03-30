import React from 'react';
import 'C://Users//Paras//Desktop//Coloseum//colloseum//src//HomePage//CSS//Body.css';
import Logo1 from './Logo1';

function Body() {
    const handleClick = () => {
        alert("View Challenges");
    };

    return (
        <div className="body-wrapper">
            <div className="text-and-logo-container">
                <div className="body-container">
                    <div className="body-text">
                        Colosseum 14.0
                    </div>
                    <div className="body-text" style={{ marginTop: '10px' }}>
                        Capture The Flag (CTF)
                    </div>
                    <div className="challenge-button" style={{ marginTop: '10px' }}>
                        <button type="button" autoFocus onClick={handleClick} >VIEW CHALLENGES</button>
                    </div>
                </div >
                {/* <div className="logo-container" >
                    <Logo1 />
                </div> */}
            </div>
        </div>
    );
}

export default Body;
