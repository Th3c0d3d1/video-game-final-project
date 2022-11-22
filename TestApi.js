export function testAPI(){
	fetch("https://api.rawg.io/api/games?key=bfe242c109884e06860a295ba9f3a547&page_size=40")
.then((response)=> response.json())
.then((data)=>{
    console.log(data.results)
})

}