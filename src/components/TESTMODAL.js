import UPDATEFORM from "./UPDATEFORM"

const TESTMODAL = ({open, close, name} ) =>{
    if(open === false){
        return null
    }

    
   return(    

        <div                
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
        >
            <div
            style={{
                background:"#333333",
                height: 'auto',
                width: 240,
                margin: "auto",
                padding: "2%",
                border: "2px solid #000",
                borderRadius: "10px",
                boxShadow: "2px solid black",
            }}
        >
            <UPDATEFORM reponame={name} onClose={close}/>
        

        </div>

        </div>
   )
}

export default TESTMODAL