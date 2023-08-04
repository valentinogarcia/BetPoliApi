import { states } from "./states"
export class user {
    private name:string
    private hash:string
    private email:string
    private ciudad:string
    private dni:number
    private edad:number
    public state:states
    private mayoriaDeEdad:number = 18;

    constructor(iName:string,iHash:string,iEmail:string,iCiudad:string,iDni:number,iEdad:number) {
        this.name=iName;this.hash=iHash;this.email=iEmail;this.ciudad=iCiudad;this.dni=iDni;this.edad=iEdad;this.state=states.pending       
    }
    
    /**
     * deny
     */
    public deny() {
        this.state = states.rejected       
    }
    /**
     * accept
     */
     accept() {
        this.state=states.accepted
    }
     pend(){
        this.state=states.pending
    }
     verifyAge() {
        if(this.edad < this.mayoriaDeEdad){ this.deny();return false; }
        return true;
    }
    getDNI(){
        return this.dni
    }
}