import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tree from 'react-tree-graph';
import Button from 'react-bootstrap/Button';
import GaussianBlur from 'react-gaussian-blur'

class MainPage extends React.Component {
    render() {
        let data = {
            name: 'Parent',
            children: [{
                name: 'Child One'
            }, {
                name: 'Child Two'
            }]
        };
        return (
            <div>
                <Tree
                    data={data}
                    height={400}
                    width={400} />);
            </div>
        )
    }
}
export default MainPage;