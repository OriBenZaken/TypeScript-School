export {};

abstract class world{
     human(): string { return this.name(); }
     abstract name() : string;
}

class data extends world{
    name() {return "jhon"}
}


///var record = new world();// error, can not create instance of Abstract class

var record = new data();
console.log(record.name());
