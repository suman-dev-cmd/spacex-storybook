import React from 'react'

const style={
    display:'flex',
    justifyContent:'center'
}
const Root = ({children}:any) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Root
