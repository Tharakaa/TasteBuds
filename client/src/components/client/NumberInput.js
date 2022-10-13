import {Add, Remove} from "@mui/icons-material";

const NumberInput = ({value, increment, decrement}) => {
    return (
        <div className="numberInputContainer">
            <div style={{width:'40px'}} className="numberInputBtn" onClick={decrement}>
                <Remove style={{fontSize: '14px'}}/>
            </div>
            <div style={{width:'50px'}} className="numberInput">
                {value}
            </div>
            <div style={{width:'40px'}} className="numberInputBtn" onClick={increment}>
                <Add style={{fontSize: '14px'}}/>
            </div>
        </div>
    );
}
export default NumberInput;
