export class Emp
{
    constructor(public empid:number=0,public empname: string='',public empsal: number=0.0)    
    {

    }
    
    
    public toString():string
    {
        return "empid:"+this.empid+",empname:"+this.empname+",empsal:"+this.empsal;
    }

}