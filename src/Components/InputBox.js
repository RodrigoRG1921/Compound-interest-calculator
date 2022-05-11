import PropTypes from 'prop-types';


const InputBox = (props) => {
	return(
	<div>
    <form>
        <label>{props.valueToAsk}</label><br/>
        
        <input className="inputEdit" type="text" value={props.inputValue} onChange={props.onChange}/> 
        </form>
	 </div>
     );
     }

InputBox.propTypes = {
    valueToAsk: PropTypes.string,
    inputValue: PropTypes.string
    
};

export default InputBox;