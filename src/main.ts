import type { Actress } from "./types";

const actressApiUrl = "http://localhost:3333/actresses"

async function getActress(id: number): Promise<Actress | null>{
    try {
            const response = await fetch(`${actressApiUrl}/${id}`);
            if(!response.ok){
                throw new Error("Errore nella chiamata HTTP")
            }
            const data : unknown = await response.json();
            if(!isActress(data)){
                throw new Error("Errore nella struttura del dato")
            }else{
                return data;
            }
        
    } catch (error) {
        if(error instanceof Error){
            console.error(error.message)
        }
        console.error(error)
        return null
    }
}

async function getAllActress(): Promise<Actress[] | null>{
    try {
            const response = await fetch(actressApiUrl);
            if(!response.ok){
                throw new Error("Errore nella chiamata HTTP")
            }
            const data : unknown = await response.json();
            if(!Array.isArray(data)){
                throw new Error("Errore nella struttura del dato")
            }else{
                return data;
            }
        
    } catch (error) {
        if(error instanceof Error){
            console.error(error.message)
        }
        console.error(error)
        return null
    }
}










function isActress(data: unknown) : data is Actress{
    if(data &&
        typeof data === "object" &&
        "id" in data &&
        typeof data.id === "number" &&
        "name" in data &&
        typeof data.name === "string" &&
        "birth_year" in data &&
        typeof data.birth_year === "number" &&
        "awards" in data &&
        typeof data.awards === "string"
    ){
        return true;
    }else{
        return false;
    }
    
}


async function getActresses(actressesIds : number[]): Promise<Actress[] | null>{
     try {
         const promises = actressesIds.map(id => getActress(id));
        const data: unknown = await Promise.all(promises);
            if(!Array.isArray(data) || data[0] === null){
                throw new Error("Errore nella struttura del dato")
            }else{
                return  data;
            }
        
    } catch (error) {
        if(error instanceof Error){
            console.error(error.message)
        }
        console.error(error)
        return null
    }
}

getActress(4).then(data => console.log(data));

getAllActress().then(data => console.log(data));

getActresses([1, 2, 4, 5]).then(data => console.log(data));
