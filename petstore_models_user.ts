/**
 * user model
 * This module defines the structure of a user object and provides two example user objects,
 * user1 and user2. The user object includes properties such as id, username, firstName, lastName, email, password, phone, and userStatus. The module exports the user type and the two example user objects for use in other parts of the application.
 */
type user={
    id:number;
    username:string;
    firstName:string;   
    lastName:string;
    email:string;
    password:string;        
    phone:string;
    userStatus:number;  
    
}
/**
 * Example user objects
 * user1 represents a user with the username "user1", first name "John", last name "Doe", email "   
 */
let user1:user={
    id:1,
    username:"user1",
    firstName:"John",
    lastName:"Doe",
    email:"johndoe@example.com",
    password:"password123",
    phone:"123-456-7890",
    userStatus:1
}
/**
 * Example user object
 * user2 represents a user with the username "user2", first name "Jane", last name "Smith", email " 
 */
let user2:user={
    id:2,
    username:"user2",
    firstName:"Jane",
    lastName:"Smith",
    email:"janesmith@example.com",
    password:"password456",
    phone:"987-654-3210",
    userStatus:1
}
export {user,user1,user2}