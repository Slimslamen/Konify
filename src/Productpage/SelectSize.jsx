import Size from "./Size";
function SelectSize (){
    return (
        <div className="flex flex-row">
            <p>Select size</p>
            <Size size="XS"/>
            <Size size="S"/>
            <Size size="M"/>
            <Size size="L"/>
            <Size size="XL"/>
        </div>
    )
}
export default SelectSize;