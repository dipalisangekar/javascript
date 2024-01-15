

class Vehical {
constructor(vehicalName,type,colour,fuel,year){
this.vehicalName=vehicalName;
this.type=type;
this.colour=colour;
this.fuel=fuel;
this.year=year;
}

getdetails(){
    
    console.log(`VehicalName:${this.vehicalName}, Type:${this.type}, Colour:${this.colour}, Fuel:${this.fuel}, Year:${this.year}`);
}
}
console.log(`========= STEP 1 Details of object=========`);
const vehical1= new Vehical("RenaultDuster","SUV","Black","Petrol",2003);
const vehical2= new Vehical("Nissan Altima","Sedan","White","Disel",2004);
const vehical3= new Vehical("Kia Rio","Hatchback","Brown","Petrol",2000);
const vehical4= new Vehical("Tata Xenon","Pickup","Red","Disel",2005);
const vehical5= new Vehical("Honda City","Sedan","black","Petrol",2006);

console.log(`Traversing of array of object......`);
const arrayOfVehicals=[vehical1,vehical2,vehical3,vehical4,vehical5];
for (const element of arrayOfVehicals) {
    element.getdetails();
    console.log(` `);
}
console.log(`===============STEP 2 =================`);
class College{
    constructor(collegeName,degreeName,year,result){
        this.collegeName=collegeName;
        this.degreeName=degreeName;
        this.year=year;
        this.result=result;
    }
    getdisplay(){
        console.log(`Collage Name:${this.collegeName},Degree Name:${this.degreeName},Year:${this.year},Result:${this.result}`);
    }
}
const collage1= new College("S.P.collage","B.s.c",2000,"First Class")
collage1.getdisplay();
console.log(` `);

const collage2= new College("BMIT collage,Solapur","Electrical Enginrring",2001,"Second Class")
collage2.getdisplay();
console.log(` `);

const collage3= new College("Dayanand collage","MBA",2004,"Distinction Class")
collage3.getdisplay();
console.log(` `);

const collage4= new College("Goverment Polytechnic collage,solapur","Computer Engineering",2011,"First Class")
collage4.getdisplay();
console.log(` `);

console.log(`===============STEP 3 =================`);
function traverseObject(arg1){
for (const key in arg1) {
    if (Object.hasOwnProperty.call(arg1, key)) {
        const element = arg1[key];
        console.log(`key ==>${key},value ==>${element}`);
    }
  }        
}
traverseObject(collage1);
console.log(` `);
traverseObject(collage2);
console.log(` `);
traverseObject(collage3);
console.log(` `);
traverseObject(collage4);
console.log(` `);