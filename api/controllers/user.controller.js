export const test =  (req , res)=>{
    res.json({
        message:"hello from test route"
    })
}

export const check =  (req , res)=>{
    res.json({
        message:"hello from check route"
    })
}

export const check2 =  (req , res)=>{
    res.send("<h1>hello from check 2 route</h1>")
}