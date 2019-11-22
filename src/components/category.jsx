import React, { Component } from 'react';
import { Card } from "ui-infra";

class Category extends Component {

    render() { 
        return ( 
                <Card className = "item">
                    <div className = "img">
                        <img src={this.props.category.image_url} alt=" " className="img"/>
                    </div>
                    <div className = "text">
                        <h3>{this.props.category.name}</h3>
                    </div>
                </Card>
         );
    }
}
 
export default Category;