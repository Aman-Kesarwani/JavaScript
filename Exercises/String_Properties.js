function showPropertis(obj){

    for(key in obj)
    {
        if(typeof obj[key] === 'string')
        console.log(key, obj[key]);
    }
}

const movie = {

    title : 'a',
    releaseYear: 2022,
    rating: 4.5,
    director: 'b'
}

showPropertis(movie);