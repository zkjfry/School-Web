import React from 'react'
import './mainpage.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tree from 'react-tree-graph';
// import { Popover } from 'antd';S
import Button from 'react-bootstrap/Button';
import GaussianBlur from 'react-gaussian-blur'

var dict = {
    "Start choosing your courses!": "pick a course!",
    "EECS3311": "Software Design",
    "EECS1001": "Research Directions in Computing"
}

class MainPage extends React.Component {
    onClick = (event, nodeKey) => {
        alert(`testing ${dict[nodeKey]}`)
    }
    render() {
        let data = {
            name: 'Start choosing your courses!',
            children: [{
                name: 'EECS3311'
            }, {
                name: 'EECS1001'
            }]
        };
        return (
            <div className="custom-container">
                <Tree
                    data={data}
                    height={600}
                    width={400}
                    svgProps={{
                        className: 'custom'
                    }} 
                    gProps={{
                        onClick: this.onClick
                    }}
                    animated/>
            </div>
        )
    }
}
export default MainPage;