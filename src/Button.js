import React, {components} from './node_modules/react';

class Button extends Component{
    render(){
        return(
            <div>
                <button class="calc-button" onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }
}