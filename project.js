
const quotes = [
    {
        discription : "amar nam arman . ami eivar SSC porikkha diyechi",
        personName:"Arman Sarker"
    },
    {
        discription : "amar nam jarman . ami eivar JSE porikkha diyechi",
        personName:"jarman Sarker"
    },
    {
        discription : "amar nam moaj . ami eivar JSE porikkha diyechi",
        personName:"moaj Sarker"
    },
    {
        discription : "amar nam Sumiya Islam Barsha  . ami eivar JSE porikkha diyechi",
        personName:"Sumiya Islam Barsha  Sarker"
    },
    {
        discription : "amar nam Faisal . ami eivar JSE porikkha diyechi",
        personName:"Faisal Sarker"
    },
    {
        discription : "amar nam rafin . ami eivar SSC porikkha dibo",
        personName:"rafin Sarker"
    },
    {
        discription : "amar nam akram . ami eivar SSC porikkha diyechi",
        personName:"akram Sarker"
    },
    {
        discription : "amar nam jahid . ami eivar SSC porikkha diyechi",
        personName:"jahid Sarker"
    },
    {
        discription : "amar nam jihad . ami eivar SSC porikkha diyechi",
        personName:"jihad Sarker"
    },
    {
        discription : "amar nam Shahin . ami eivar SSC porikkha diyechi",
        personName:"Shahin Sarker"
    },
]
document.querySelector('#quote').addEventListener("click",function(){
    const p= document.getElementById("quote-p") 
    const name = document.getElementById("name")

  const random = Math.floor(Math.random()* quotes.length);
  
   p.innerText= quotes[random].discription;
  
   name.innerText=quotes[random].personName;
})