export const notFound = (req,res,next)=>{
    res.status(404).json({error:'route is not found'})
}