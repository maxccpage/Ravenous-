import React, { Component } from 'react';
import './businessList.css';
import Business from '../business/business';

class BusinessList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => {
                        return <Business business={business} />
                    })
                }
            </div>
        );
    }
}

export default BusinessList; 