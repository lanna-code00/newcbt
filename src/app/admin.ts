export class Admin {
    public Id: number;
    public name: string; 
    public email: string;
    public identification: string;
    public pwd: string;
 
  
    
    constructor(Id: number, name: string, email: string, identification: string, pwd: string) {
    this.Id = Id;
    this.name = name;
    this.email = email;
    this.identification = identification;
    this.pwd = pwd;
    }
}