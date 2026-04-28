/**
 * This file defines the 'apiResponse' type and creates four instances of it: successResponse, errorResponse, notFoundResponse, and serverErrorResponse. Each instance represents a different type of API response with a unique code, type, and message.
 */

    type apiResponse={
    code:number;
    type:string;
    message:string;
}
/**
 * Example API response objects     
 * successResponse represents a successful operation with a code of 200, type "success", and message "successful operation".
 * errorResponse represents an invalid input error with a code of 400, type "error", and message "invalid input".           
 * notFoundResponse represents a not found error with a code of 404, type "error", and message "not found".
 * serverErrorResponse represents an internal server error with a code of 500, type "error", and message "internal server error". 
 * These API response objects can be used to standardize the responses sent by the API, allowing for consistent communication of success and error states to clients. The module exports the apiResponse type and the example API response objects for use in other parts of the application, enabling developers to easily import and utilize these responses wherever needed. 

 */
let successResponse:apiResponse={
    code:200,
    type:"success",
    message:"successful operation"
}
/**
 * Example API response objects             
 *  
    * errorResponse represents an invalid input error with a code of 400, type "error", and message "invalid input".        
    *   notFoundResponse represents a not found error with a code of 404, type "error", and message "not found".
    * serverErrorResponse represents an internal server error with a code of 500, type "error", and message "internal server error". 
 * These API response objects can be used to standardize the responses sent by the API, allowing for consistent communication of success and error states to clients. The module exports the apiResponse type and the example API response objects for use in other parts of the application, enabling developers to easily import and utilize these responses wherever needed. 
 */
let errorResponse:apiResponse={
    code:400,
    type:"error",
    message:"invalid input"
}   
/**
 * Example API response objects             
 *  
    * errorResponse represents an invalid input error with a code of 400, type "error", and message "invalid input".    
    *           
    * notFoundResponse represents a not found error with a code of 404, type "error", and message "not found".
    * serverErrorResponse represents an internal server error with a code of 500, type "error", and message "internal server error". 
 * These API response objects can be used to standardize the responses sent by the API, allowing for consistent communication of success and error states to clients. The module exports the apiResponse type and the example API response objects for use in other parts of the application, enabling developers to easily import and utilize these responses wherever needed. 
 */
let notFoundResponse:apiResponse={
    code:404,
    type:"error",
    message:"not found"
}
/**
 * Example API response objects             
 *  
    * errorResponse represents an invalid input error with a code of 400, type "error", and message "invalid input".            
    * notFoundResponse represents a not found error with a code of 404, type "error", and message "not found".
    * serverErrorResponse represents an internal server error with a code of 500, type "error", and message "internal server error". 
 * These API response objects can be used to standardize the responses sent by the API, allowing for consistent communication of success and error states to clients. The module exports the apiResponse type and the example API response objects for use in other parts of the application, enabling developers to easily import and utilize these responses wherever needed. 
 */
let serverErrorResponse:apiResponse={
    code:500,
    type:"error",
    message:"internal server error"
}
export {apiResponse,successResponse,errorResponse,notFoundResponse,serverErrorResponse}