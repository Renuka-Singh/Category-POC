import React, { Component } from 'react';
import "./categories.css";
import { Card } from "ui-infra";

class Category extends Component {

    render() { 
        return ( 
            <div className = "wrapper">
                <Card className = "item">
                    <div className = "img">
                        <img src={this.props.category.image_url} alt="boohoo" className="img"/>
                    </div>
                    <div className = "text">
                        <h3>{this.props.category.name}</h3>
                    </div>
                </Card>
            </div>
         );
    }
}
 
export default Category;