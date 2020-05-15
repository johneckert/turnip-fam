import React from 'react';

const IslandNav = (props) => {
    let islands = props.islands;
    console.log(islands)
    let tabs;

    tabs = islands.map((island, key) => {
        return (
            <div className="tab" key={key} onClick={props.setCurrentIsland}>
                {island.name}
            </div>
        );
    });

    return(
        <div className="nav-bar">
            {tabs}
        </div>
    )
};

export default IslandNav;