export function desc(price , priceAfterDesc){
    let desc = ((price - priceAfterDesc) / price) * 100 ;
    return desc
}

