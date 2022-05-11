import PropTypes from 'prop-types'
const ResultBox = (props) => {
    return(
    <div>
        <h3>Calculation projection</h3>
        <p>Future investment value: </p>
        <p>$ {props.result}</p>
    </div>
);}

ResultBox.propTypes = {
    result: PropTypes.number
}
export default ResultBox;