
//Задание 1
function fimdMedian(numbers:number[]): number{
      const cortNumbers=numbers.sort((a,b)=>a-b);

      const length=cortNumbers.length;
      const midian=Math.floor(length/2);

      if(length%2!=0)
      {
        return cortNumbers[midian];
      }
      else
      {
        return (cortNumbers[midian]+cortNumbers[midian-1])/2
      }
}

function countNotZeroElements(array:number[][], startLine:number, endLine:number, startCol:number, endCol:number):number{
    let count=0;
    for(let i=startLine;i<=endLine;i++)
    {
        for(let j=startCol;j<=endCol;j++)
        {
            if(array[i] && array[i][j]!=0)
             count++;
        }
    }
    return count;
     
}

const array=[4,5,9,1];
const median = fimdMedian(array);
console.log(median);

const matrix = [
    [0, 1, 0],
    [2, 0, 2],
    [5, 0, 5],
];
const nonZeroCount = countNotZeroElements(matrix, 0, 0, 0, 2);
console.log(nonZeroCount); 


//Задание 2
type cortege=[number,string,number];

function multiply(cort:cortege):number{
    const[number1, ,number2]=cort;
    return number1*number2

}

const myCortege: cortege = [15,"Hello",4];
const num = multiply(myCortege);
console.log(num);

//Задание 3
enum Vitamins{
    A="Витамин А",
    B="Витамин В",
    C="Витамин C",
    D="Витамин D",
    E="Витамин E",
    Gutalin="Витамин Гуталин",
    Tar="Витамин Гудрон"
};

console.log(Vitamins.Gutalin);

//Задание 4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
   }

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
   }
}

function printInfoAboutPet<T extends Pet>(pet:T):void{
    console.log(pet.name);
    console.log(pet.age);
    console.log(pet.speak());
}

const dog= new Dog();
printInfoAboutPet(dog);

//Задание 5
type VitaminInfo = {
    name: Vitamins;      
    dosage: number;      
    benefits: string[];  
    source: string;      
};


const vitaminC: VitaminInfo = {
    name: Vitamins.C,
    dosage: 50, 
    benefits: [
        "Повышение иммунитета",
        "Улучшение состояния кожи"
    ],
    source: "Цитрусовые, ягоды"  
};


console.log(JSON.stringify(vitaminC, null, 2));