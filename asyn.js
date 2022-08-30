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
    console.log('wife : here are tickets')
    console.log('husband : we should go in ')
    console.log('wife : I m hungry ')

    let popcron = await getPopcron;
    console.log(`wait I will buy some ${popcron}`)
    let butter = await addbutter;
    console.log('wife : I want some butter in my popcrones')
    console.log('Husband : I will get U some butter')

    let Drinks = await getDrinks;
    console.log(`wife: I also want something to ${Drinks}`)
    console.log('husband: wait I m going to get some drinks and AB kuch mt magna bhuki aurat')
    console.log('wife : ohh my baby!! ...Thank you')
    console.log(`Now we have ${popcron},${butter},and ${Drinks} lets GO`)

    return ticket;
    
}
preMovie().then((m) => console.log(`Person3 : shows ${m}`));
