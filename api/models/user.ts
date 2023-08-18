import { states } from "./states"
export class user {
    /*
*/
    private nombreCompleto:string
    private fotoDni:string
    private email:string
    private domicilio:string
    private dni:number
    private fechaDeNacimiento:Date
    public state:states

    constructor(iName:string,iHash:string,iEmail:string,iCiudad:string,iDni:number,iEdad:Date) {
        this.nombreCompleto=iName;this.fotoDni=iHash;this.email=iEmail;this.domicilio=iCiudad;this.dni=iDni;this.fechaDeNacimiento=iEdad;this.state=states.pending       
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
    getDNI(){
        return this.dni
    }
}