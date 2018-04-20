import React, {Component} from 'react';
import '../css/Rank.css';

class Rank extends Component {
    render() {

        return(
            <div>
                <div className="white f3">
                    {"Sandeep, your current rank is ..."}

                </div>
                <div className="white f1">
                    {"#5"}

                </div>
               
            </div>
        );
    }
}

export default Rank;