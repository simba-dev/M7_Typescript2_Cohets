class Rocket{
    id:string;
    nPropulsors:number;
    propulsors:Propulsor[]=new Array();
    
    constructor(id:string,nPropulsors:number){
        this.id=id;
        this.nPropulsors=nPropulsors;
    }
    
    addWheel(propulsor:Propulsor):void{
        this.propulsors.push(propulsor);
    }
} 