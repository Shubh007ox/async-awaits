console.log('Person1 : show Tickets')
console.log('Person2 : show Tickets')

const getTicket = new Promise((resolve,reject) => {
     setTimeout(() => {
        resolve('ticket')
     },1000)
})
const getPopcron = getTicket.then((t) => {
    console.log('wife : here are tickets')
    console.log('husband : we should go in ')
    console.log('wife : I m hungry ')
    console.log(`wait I will buy some POpcrone`)
    return new Promise((resolve,reject) => {
        const error = false;
        if(!error){
            resolve(`${t}, popcrone`);
        }else{
            reject('Error: Something went wrong')
        }
    })
})
const getButter = getPopcron.then((t) => {
    console.log('wife : I want some butter in my popcrones')
    console.log('Husband : I will get U some butter')
    return new Promise((resolve,reject) => {resolve(`${t}, Butter`)})
})
const getDrinks = getButter.then((t) => {
    console.log(`wife: I also want something to ${Drinks}`)
    console.log('husband: wait I m going to get some drinks and AB kuch mt magna bhuki aurat')
    console.log('wife : ohh my baby!! ...Thank you')
    console.log('husband : now we have');
    return new Promise((resolve,reject) => {resolve(`${t}, Drinks`)})
}) 
getDrinks.then((t) => console.log(t))
console.log('Person4 : show tickets')
console.log('Person5 : show Tickets')


