import list1 from "../../assets/list1.png"
export default function Heading(props){
    return(
        <div style={{display:'flex',flexDirection:'row'}}>
            <div>
                <img src={props.image} width="250"/>

            </div>
            <div style={{fontFamily:'dosis',fontSize:18,fontWeight:'bold'}}>
                {props.caption}

            </div>
            <div style={{marginLeft:'auto'}}>
            <img src={list1} width="10%"/>
            </div>
        </div>
    )
}