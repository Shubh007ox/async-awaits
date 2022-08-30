console.log('Person1 : show Tickets')
console.log('Person2 : show Tickets')


const preMovie = async () => {
    const promiseWifeTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
    })
    const getPopcron = new Promise((resolve,reject) => resolve(`popcron`));
    const addbutter = new Promise((resolve,reject) => resolve('butter'))
    const getDrinks = new Promise((resolve,reject) => resolve('Drinks'))
    let ticket = await promiseWifeTickets;

    let [popcron,butter,Drinks] = await Promise.all([getPopcron,addbutter,getDrinks])

    console.log(`${popcron}, ${butter}, ${Drinks}`);
    
    return ticket;
    
}
preMovie().then((m) => console.log(`Person3 : shows ${m}`));

console.log('Person4 : show Tickets')
console.log('Person5 : show Tickets')
