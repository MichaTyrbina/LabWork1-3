//Задание 1.1
interface Owner{
    name:string;
    surname:string;
    patronymic:string;
    birthday:Date;
    typeDocument:TypeDocument;
    documentSeries:string;
    documentNumber:string;
    printInfo():void;

}

enum TypeDocument{
    Passport,
    StudentID,
    IdentityCard
}

class Driver implements Owner{
    private name1:string;
    private surname1:string;
    private patronymic1:string;
    private birthday1:Date;
    private typeDocument1:TypeDocument;
    private documentSeries1:string;
    private documentNumber1:string;

    constructor(
        nameValue:string,
        surnameValue:string,
        patronymicValue:string,
        birthdayValue:Date,
        typeDocumentValue:TypeDocument,
        documentSeriesValue:string,
        documentNumberValue:string
    )
    {
        this.name1=nameValue;
        this.surname1=surnameValue;
        this.patronymic1=patronymicValue;
        this.birthday1=birthdayValue;
        this.typeDocument1=typeDocumentValue;
        this.documentSeries1=documentSeriesValue;
        this.documentNumber1=documentNumberValue;
    }

    get name(): string {
        return this.name1;
    }

    get surname(): string {
        return this.surname1;
    }

    get patronymic(): string {
        return this.patronymic1;
    }

    get birthday(): Date {
        return this.birthday1;
    }

    get typeDocument(): TypeDocument {
        return this.typeDocument1;
    }

    get documentSeries(): string {
        return this.documentSeries1;
    }

    get documentNumber(): string {
        return this.documentNumber1;
    }

    printInfo(): void {
        console.log("Имя: "+this.name);
        console.log("Фамилия: "+this.surname);
        console.log("Отчество: "+this.patronymic);
        console.log("Дата рождения: "+this.birthday.toLocaleDateString());
        console.log("Тип документа: "+TypeDocument[this.typeDocument]);
        console.log("Серия документа: "+this.documentSeries);
        console.log("Номер документа: "+this.documentNumber);
    }
}

const owner = new Driver(
    'Иванов',
    'Иван',
    'Иванович',
    new Date('1990-05-21'),
    TypeDocument.Passport,
    '1234',
    '567890'
);

owner.printInfo();
console.log();







//Задание 1.2

interface Vehicle{
   mark:string;
   model:string;
   year:number;
   numberVIN:string;
   registrationNumber: string;
   owner:Owner;
   printInformation():void;
}

class VehicleImpl implements Vehicle{
    private mark1:string;
    private model1:string;
    private year1:number;
    private numberVIN1:string;
    private registrationNumber1: string;
    private owner1:Owner;

    constructor(
        markValue:string,
        modelValue:string,
        yearValue:number,
        numberVINValue:string,
        registrationNumberValue: string,
        ownerValue:Owner
    )
    {
        this.mark1=markValue;
        this.model1=modelValue;
        this.year1=yearValue;
        this.numberVIN1=numberVINValue;
        this.registrationNumber1=registrationNumberValue;
        this.owner1=ownerValue;
    }

    get mark(): string {
        return this.mark1;
    }

    get model(): string {
        return this.model1;
    }

    get year(): number {
        return this.year1;
    }

    get registrationNumber(): string {
        return this.registrationNumber1;
    }

    get numberVIN(): string {
        return this.numberVIN1;
    }

    get owner(): Owner {
        return this.owner1;
    }

    printInformation(): void {
        console.log("Марка: "+this.mark);
        console.log("Модель: "+this.model);
        console.log("Год: "+this.year);
        console.log("VIN-номер: "+this.numberVIN);
        console.log("Регистрационный номер: "+this.registrationNumber);
    }

}

const vehicle1=new VehicleImpl(
    'Лада',
    'Девятка',
    1990,
    '12345',
    '54321',
    owner
)

vehicle1.printInformation();
console.log();






//Задание 2.1
enum BodyType {
    Sedan,
    Hatchback,
    SUV,
    Coupe
}


enum CarClass {
    Economy,
    Business,
    Luxury
}


interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}


class CarImpl extends VehicleImpl implements Car {
    private bodyType1: BodyType;
    private carClass1: CarClass;

    constructor(
        markValue: string,
        modelValue: string,
        yearValue: number,
        vinValue: string,
        registrationNumberValue: string,
        ownerValue: Owner,
        bodyTypeValue: BodyType,
        carClassValue: CarClass
    )
    {
        super(markValue, modelValue, yearValue, vinValue, registrationNumberValue, ownerValue);
        this.bodyType1 = bodyTypeValue;
        this.carClass1 = carClassValue;
    }

    
    get bodyType(): BodyType {
        return this.bodyType1;
    }

    get carClass(): CarClass {
        return this.carClass1;
    }

    displayInfo(): void {
        super.printInformation();
        console.log("Тип кузова: "+BodyType[this.bodyType]);
        console.log("Класс автомобиля: "+CarClass[this.carClass]);
    }
}





// Задание 2.2 
interface Motorbike extends Vehicle {
    frameType: string;
    isForSport: boolean;
}


class MotorbikeImpl extends VehicleImpl implements Motorbike {
    private frameType1: string;
    private isForSport1: boolean;

    constructor(
        markValue: string,
        modelValue: string,
        yearValue: number,
        vinValue: string,
        registrationNumberValue: string,
        ownerValue: Owner,
        frameTypeValue: string,
        isForSportValue: boolean
    ) 
    {
        super(markValue, modelValue, yearValue, vinValue, registrationNumberValue, ownerValue);
        this.frameType1 = frameTypeValue;
        this.isForSport1 = isForSportValue;
    }

    
    get frameType(): string {
        return this.frameType1;
    }

    get isForSport(): boolean {
        return this.isForSport1;
    }

    displayInfo(): void {
        super.printInformation();
        console.log("Тип рамы: "+ this.frameType);
        console.log("Для спорта: "+this.isForSport);
    }
}



const car = new CarImpl(
    'Toyota',
    'Camry',
    2020,
    '123456',
    '654321',
    owner,
    BodyType.Sedan,
    CarClass.Luxury
);

const motorbike = new MotorbikeImpl(
    'Yamaha',
    'YZI-RA2',
    2019,
    '234567',
    '765432',
    owner,
    'Sport',
    true
);


car.displayInfo();
console.log();
motorbike.displayInfo();
console.log();



//Задание 3
interface VehicleStorage<T extends Vehicle>
{
    dateCreate:Date;
    vehiclesArray:T[];
    allElementsArray():T[];
}

class VehicleElements<T extends Vehicle> implements VehicleStorage<T>{
    private dateCreate1:Date;
    private vehiclesArray1:T[];
    
    constructor()
    {
        this.dateCreate1 = new Date();
        this.vehiclesArray1 = [];
    }

    get dateCreate():Date{
        return this.dateCreate1;
    }

    get vehiclesArray():T[]{
        return this.vehiclesArray1;
    }

    allElementsArray(): T[] {
        return this.vehiclesArray;
    }

    addVehicle(vehicle: T): void {
        this.vehiclesArray1.push(vehicle);
    }
}

const arr=new VehicleElements<VehicleImpl>();

const vehicle2=new VehicleImpl(
    'Лада',
    'Гранта',
    2019,
    '123450',
    '554321',
    owner
)

arr.addVehicle(vehicle1);
arr.addVehicle(vehicle2);

console.log();
console.log("Дата создания хранилища: "+arr.dateCreate);
console.log('Все транспортные средства в хранилище:');
arr.allElementsArray().forEach(vehicle => vehicle.printInformation());
console.log();






