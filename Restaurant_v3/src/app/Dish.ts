export interface Dish{
    id:number,
    name: string,
    cuisine:string,
    type:string,
    category:string,
    ingredients:string[],
    quantity:number,
    price:number,
    description:string,
    images:string[],
    ratesCounter:number;
    rating:number;
    comments:any[];
}