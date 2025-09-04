const person = {
    name: 'Thony',
    age: 45,
    key: 'Ironman'
}

// const {key, name, age} = person;

// console.log(key, name, age);

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?:string;
}

const useContext = ({key, name, age, rank}: Hero)=>{
    return {
        keyName: key,
        user:{
            name,
            age,
        },
        rank: rank
    }
}

const {keyName, user, rank} = useContext(person)
const {name, age} = user;

console.log(name, age);

