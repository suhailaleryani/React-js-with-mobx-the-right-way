
import React from 'react';
import { observer } from 'mobx-react';


class CarsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        return (
            <div className="cars-compnent">
                Number of cars : {this.store.collection.length}
                <button className="" onClick={this.store.getCars}>Click to fetch</button>
                <div className="list">
                    <ul>
                        {this.store.collection.length > 0 && this.store.collection.toArray.map((car, index) => {
                            return (<li key={`car-${index}`} > Car - {index} => color: {car.color}, price:  {car.price}, capacity:  {car.capacity}, numberOfSeat:  {car.numberOfSeat} </li>)
                        })}
                    </ul>
                </div>
            </div>
        );
    }

}

export default observer(CarsComponent)