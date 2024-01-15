import {connect ,connection} from "mongoose";

const conn ={
    isConnected:false
}
export async function connectDB(){
    if (conn.isConnected) return;
    const db=await connect(process.env.MONGODB_URL)
    console.log(db.connection.db.databaseName)
    conn.isConnected=db.connections[0].readyState
}

connection.on('connected',()=>{
    console.log('MongoDB is connected')
})

connection.on('error',(err)=>{
    console.log('is not Connected we have err',err)
})