const newsURL ='https://sv443.net/jokeapi/v2/joke/Programming?type=single'
const btnJoke = document.getElementById("jokeSpot")
//https://sv443.net/jokeapi/v2
const getJoke = async() =>{
    try{
        console.log("here");
        const response =await fetch(newsURL)
        const obj = await response.json()
        console.log(obj);
        const joke = obj.joke;
        return joke
    }catch (error){console.error(error)}
}
const updateNews = async(event)=>{
    try {
        document.getElementById('Rjoke').innerHTML = ''
        const anwser = await getJoke()
        document.getElementById('Rjoke').innerHTML = anwser
        console.log(anwser);
    }catch(error){console.error(error)}
}
btnJoke.onclick=function(){
    updateNews();
}