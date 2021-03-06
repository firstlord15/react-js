import {Component} from "react";
// const BodyItem = (props) => {

//     return <li>{props.item}</li>
// }

class BodyItem extends Component {

    state = { // сотояние
        checked: false
    }
    
    onDbClickDelete = () => {
        this.props.deleteItem(this.props.item)
    }

    onClickChecked = () => {
        this.setState(
            (state) => {
                return {
                    checked: !state.checked   
                }
            }
        )
        console.log(this.state.checked)
    }

    render(){ // render - это return внутри class 

        let classNameChecked = ""

        if (this.state.checked === true){
            classNameChecked = "checked"
        }

        return <li onDoubleClick={this.onDbClickDelete} onClick={this.onClickChecked} className={classNameChecked}>{this.props.item}</li>
    }
}




export default BodyItem;