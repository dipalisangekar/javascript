

class Bank{
    constructor(bankName,location,ifscCode,branchCode){
          this.bankName=bankName;
          this.location=location;
          this.ifscCode=ifscCode;
          this.branchCode=branchCode;
    }
getDetails(){
console.log(`Bank Name=${this.bankName},Location=${this.location},IFSC Code=${this.ifscCode},Branch Code=${this.branchCode}`);
}

}
const yesBank = new Bank("Yes Bank","Pune","YES34567", 45678);
console.log("============Objects ==============");
console.log("Bank Details is-");
yesBank.getDetails();

console.log("                               ");

const sbiBank = new Bank("SBI Bank", "wakad", "SBI12345", 34256);
console.log("Bank Details is-");
sbiBank.getDetails();

console.log("                               ");

const mahBank = new Bank("Mah Bank","Gandhi Chowk","MAH678893",45368);
console.log("Bank Details is-");
mahBank.getDetails();

console.log("                               ");

const axisBank = new Bank("Axis Bank","Shivaji Chowk","AXI678894",56789);
console.log("Bank Details is-");
axisBank.getDetails();

console.log("============Adding Data member==============");
Bank.prototype.openTime="9 AM IST";
console.log(`Open time:${sbiBank.openTime}`)

Bank.prototype.closeTime="6 PM IST"
console.log(`Close Time:${sbiBank.closeTime}`);

console.log("============Timing of SBI Bank==============");
console.log(`Open Time of SBI Bank :${sbiBank.openTime}`)
console.log(`Close Time of SBI Bank :${sbiBank.closeTime}`);

console.log("============Timing of Axis Bank==============");

Bank.prototype.bankName="Axis Bank";
console.log(`Name of Bank :${axisBank.bankName}`)
console.log(`Close Time of Axis Bank :${sbiBank.closeTime}`);

console.log("============Objects ==============");
Bank.prototype.bankName="Yes Bank";
console.log(`Bank name is:${yesBank.bankName}`);

Bank.prototype.branchCode="Yes Bank";
console.log(`Branch Code of Yes Bank :${yesBank.branchCode}`);

Bank.prototype.openTime="9 AM IST";
console.log(`Open time of Yes Bank :${yesBank.openTime}`)
