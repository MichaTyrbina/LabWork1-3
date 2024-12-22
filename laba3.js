var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeDocument;
(function (TypeDocument) {
    TypeDocument[TypeDocument["Passport"] = 0] = "Passport";
    TypeDocument[TypeDocument["StudentID"] = 1] = "StudentID";
    TypeDocument[TypeDocument["IdentityCard"] = 2] = "IdentityCard";
})(TypeDocument || (TypeDocument = {}));
var Driver = /** @class */ (function () {
    function Driver(nameValue, surnameValue, patronymicValue, birthdayValue, typeDocumentValue, documentSeriesValue, documentNumberValue) {
        this.name1 = nameValue;
        this.surname1 = surnameValue;
        this.patronymic1 = patronymicValue;
        this.birthday1 = birthdayValue;
        this.typeDocument1 = typeDocumentValue;
        this.documentSeries1 = documentSeriesValue;
        this.documentNumber1 = documentNumberValue;
    }
    Object.defineProperty(Driver.prototype, "name", {
        get: function () {
            return this.name1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "surname", {
        get: function () {
            return this.surname1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "patronymic", {
        get: function () {
            return this.patronymic1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "birthday", {
        get: function () {
            return this.birthday1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "typeDocument", {
        get: function () {
            return this.typeDocument1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "documentSeries", {
        get: function () {
            return this.documentSeries1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "documentNumber", {
        get: function () {
            return this.documentNumber1;
        },
        enumerable: false,
        configurable: true
    });
    Driver.prototype.printInfo = function () {
        console.log("Имя: " + this.name);
        console.log("Фамилия: " + this.surname);
        console.log("Отчество: " + this.patronymic);
        console.log("Дата рождения: " + this.birthday.toLocaleDateString());
        console.log("Тип документа: " + TypeDocument[this.typeDocument]);
        console.log("Серия документа: " + this.documentSeries);
        console.log("Номер документа: " + this.documentNumber);
    };
    return Driver;
}());
var owner = new Driver('Иванов', 'Иван', 'Иванович', new Date('1990-05-21'), TypeDocument.Passport, '1234', '567890');
owner.printInfo();
console.log();
var VehicleImpl = /** @class */ (function () {
    function VehicleImpl(markValue, modelValue, yearValue, numberVINValue, registrationNumberValue, ownerValue) {
        this.mark1 = markValue;
        this.model1 = modelValue;
        this.year1 = yearValue;
        this.numberVIN1 = numberVINValue;
        this.registrationNumber1 = registrationNumberValue;
        this.owner1 = ownerValue;
    }
    Object.defineProperty(VehicleImpl.prototype, "mark", {
        get: function () {
            return this.mark1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "model", {
        get: function () {
            return this.model1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "year", {
        get: function () {
            return this.year1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "registrationNumber", {
        get: function () {
            return this.registrationNumber1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "numberVIN", {
        get: function () {
            return this.numberVIN1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "owner", {
        get: function () {
            return this.owner1;
        },
        enumerable: false,
        configurable: true
    });
    VehicleImpl.prototype.printInformation = function () {
        console.log("Марка: " + this.mark);
        console.log("Модель: " + this.model);
        console.log("Год: " + this.year);
        console.log("VIN-номер: " + this.numberVIN);
        console.log("Регистрационный номер: " + this.registrationNumber);
    };
    return VehicleImpl;
}());
var vehicle1 = new VehicleImpl('Лада', 'Девятка', 1990, '12345', '54321', owner);
vehicle1.printInformation();
console.log();
//Задание 2.1
var BodyType;
(function (BodyType) {
    BodyType[BodyType["Sedan"] = 0] = "Sedan";
    BodyType[BodyType["Hatchback"] = 1] = "Hatchback";
    BodyType[BodyType["SUV"] = 2] = "SUV";
    BodyType[BodyType["Coupe"] = 3] = "Coupe";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass[CarClass["Economy"] = 0] = "Economy";
    CarClass[CarClass["Business"] = 1] = "Business";
    CarClass[CarClass["Luxury"] = 2] = "Luxury";
})(CarClass || (CarClass = {}));
var CarImpl = /** @class */ (function (_super) {
    __extends(CarImpl, _super);
    function CarImpl(markValue, modelValue, yearValue, vinValue, registrationNumberValue, ownerValue, bodyTypeValue, carClassValue) {
        var _this = _super.call(this, markValue, modelValue, yearValue, vinValue, registrationNumberValue, ownerValue) || this;
        _this.bodyType1 = bodyTypeValue;
        _this.carClass1 = carClassValue;
        return _this;
    }
    Object.defineProperty(CarImpl.prototype, "bodyType", {
        get: function () {
            return this.bodyType1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarImpl.prototype, "carClass", {
        get: function () {
            return this.carClass1;
        },
        enumerable: false,
        configurable: true
    });
    CarImpl.prototype.displayInfo = function () {
        _super.prototype.printInformation.call(this);
        console.log("Тип кузова: " + BodyType[this.bodyType]);
        console.log("Класс автомобиля: " + CarClass[this.carClass]);
    };
    return CarImpl;
}(VehicleImpl));
var MotorbikeImpl = /** @class */ (function (_super) {
    __extends(MotorbikeImpl, _super);
    function MotorbikeImpl(markValue, modelValue, yearValue, vinValue, registrationNumberValue, ownerValue, frameTypeValue, isForSportValue) {
        var _this = _super.call(this, markValue, modelValue, yearValue, vinValue, registrationNumberValue, ownerValue) || this;
        _this.frameType1 = frameTypeValue;
        _this.isForSport1 = isForSportValue;
        return _this;
    }
    Object.defineProperty(MotorbikeImpl.prototype, "frameType", {
        get: function () {
            return this.frameType1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeImpl.prototype, "isForSport", {
        get: function () {
            return this.isForSport1;
        },
        enumerable: false,
        configurable: true
    });
    MotorbikeImpl.prototype.displayInfo = function () {
        _super.prototype.printInformation.call(this);
        console.log("Тип рамы: " + this.frameType);
        console.log("Для спорта: " + this.isForSport);
    };
    return MotorbikeImpl;
}(VehicleImpl));
var car = new CarImpl('Toyota', 'Camry', 2020, '123456', '654321', owner, BodyType.Sedan, CarClass.Luxury);
var motorbike = new MotorbikeImpl('Yamaha', 'YZI-RA2', 2019, '234567', '765432', owner, 'Sport', true);
car.displayInfo();
console.log();
motorbike.displayInfo();
console.log();
var VehicleElements = /** @class */ (function () {
    function VehicleElements() {
        this.dateCreate1 = new Date();
        this.vehiclesArray1 = [];
    }
    Object.defineProperty(VehicleElements.prototype, "dateCreate", {
        get: function () {
            return this.dateCreate1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleElements.prototype, "vehiclesArray", {
        get: function () {
            return this.vehiclesArray1;
        },
        enumerable: false,
        configurable: true
    });
    VehicleElements.prototype.allElementsArray = function () {
        return this.vehiclesArray;
    };
    VehicleElements.prototype.addVehicle = function (vehicle) {
        this.vehiclesArray1.push(vehicle);
    };
    return VehicleElements;
}());
var arr = new VehicleElements();
var vehicle2 = new VehicleImpl('Лада', 'Гранта', 2019, '123450', '554321', owner);
arr.addVehicle(vehicle1);
arr.addVehicle(vehicle2);
console.log();
console.log("Дата создания хранилища: " + arr.dateCreate);
console.log('Все транспортные средства в хранилище:');
arr.allElementsArray().forEach(function (vehicle) { return vehicle.printInformation(); });
console.log();
