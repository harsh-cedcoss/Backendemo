
//creating wrapper using Higher Order function

// const asyncHandler = (fn) => {          //by Promise
//     (req, res, next) => {
//         Promise.resolve(fn(req, res, next)).catch((err) => next(err))
//     }
// }

const asyncHandler = (fn) => async (req, res, next) => {        //by async await
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}       


export {asyncHandler}