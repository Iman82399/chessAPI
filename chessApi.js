function getByPlayerName(playerName){
    fetch(`https://api.chess.com/pub/player/${playerName}`).then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data)
    })
}
// getByPlayerName('hikaru')

function getTitleHolders(title){
    fetch(`https://api.chess.com/pub/titled/${title}`).then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data)
    })
}
// getTitleHolders('GM')

function getByPlayerStats(playerName){
    fetch(`https://api.chess.com/pub/player/${playerName}/stats`).then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data['chess_rapid']['record'])
        // return data
    })
}
getByPlayerStats('anishgiri')

const playerArray = ['adaro','hikaru','agser','anishgiri']

playerArray.forEach(element=>{
    getByPlayerStats(element)
})