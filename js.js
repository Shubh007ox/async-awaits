const Posts = [
    {title:'this is 1 title',body:'this is the 1st body'},
    {title:'this is 2 title',body:'this is the 2st body'}
]
async function getpost() {
    setTimeout(() => {
        output = '';
        for(let i=0;i<Posts.length;i++){
            output += `<li>${Posts[i].title}</li>`
        }
        document.body.innerHTML = output
    },1000);

}
async function createpost(post){
    const createpost = new Promise((resolve,reject) => {
        setTimeout(() => {
            Posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong')
            }
        },1000);
    })
    
}
createpost({title:'this is 4th posty',body:'this is the body of '}).then(getpost);

