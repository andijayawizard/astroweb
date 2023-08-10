export default function MyButton(){
    const clicked=()=>{
        console.log('aloha')
    }
    return (
        <div>
            <button style={{color:'purple'}} onClick={clicked}>click here</button>
        </div>
    )
}