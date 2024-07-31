//using promises
const asyncHandelr = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error),
    );
  };
};

export { asyncHandelr };

//usign try-catch
/*
const asyncHandelr =() =>{}
const asyncHandelr = (function)=>()=>{} or (function)=>{()=>{}}
const asyncHandelr = (function) => async () => {}
*/

/*

const asyncHandelr1 = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

*/
