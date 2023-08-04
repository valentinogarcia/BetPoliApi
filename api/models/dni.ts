class dni {
    private num:number
    private genero:string
    private fechaDeNacimiento:Date
    private nombreCompleto:string

    constructor(iNum:number,iGenero:string,ifecha:Date,inombreCompleto:string) {
        this.num=iNum;this.genero=iGenero;this.fechaDeNacimiento=ifecha;this.nombreCompleto=inombreCompleto;        
    }
}