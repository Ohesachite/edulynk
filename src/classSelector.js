import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

function ClassSelector (props) {
    const [classes, setClasses] = useState([]);

    const getClasses = () => {
        // call to database for class list 
        var data = [    //TEST DATA
            {name: "c1", id: 1}, 
            {name: "c2", id: 2}
        ];
        setClasses(data);
    }

    useEffect(() => {
        getClasses()
    }, []) 
    
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    My Classes
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {classes.map(cls => (
                        <Dropdown.Item>{cls.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default ClassSelector;