import React, { Component } from 'react';
import './businessList.css';
import Business from '../business/business';

class BusinessList extends Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
}

export default BusinessList; 