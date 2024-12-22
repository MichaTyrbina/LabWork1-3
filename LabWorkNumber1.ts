const multiply1 = (a: number, b: number): number => {
    return a * b;
};
console.log(multiply1(5, 4)); 

const str1: string = "Hello"; 
let num1: number = 42;                      
const isTrue1: boolean = true;               
let arr1: number[] = [1, 2, 3, 4, 5];       
const obj1: { name: string; age: number } = { name: "Alice", age: 30 }; 
let anyVar1: any = "Could be anything"; 
enum Season {
    Winter = "Зима",
    Spring = "Весна",
    Summer = "Лето",
    Autumn = "Осень "
    };    
let date1: Date = new Date(); 

interface Entity{
    id: number;
}

interface Json extends Entity
{
    name:string;
    surname?:string;
}

const data1: Json={
    id:1,
    name: "Миша",
}

const jsonString1: string=JSON.stringify(data1);

console.log(jsonString1);