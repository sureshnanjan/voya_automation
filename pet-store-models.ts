
type ApiResponse = {code:number, type:string, message:string} 

type Tag = { id: number, name: string };

type Category = {id:number,name:string}

type Pet = {id: number, category:Category[], name:string, photoUrls:string[],  tags:Tag[], status:string}

type Order = {id:number, petId:number, quantity:number, shipDate:Date, status:string, complete:boolean}

type User = {id:number, username:string, firstName:string, lastName:string, email:string, password:string, phone:string, userStatus:number}

