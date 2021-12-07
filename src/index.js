const API = 'https://platzi-avo.vercel.app'
const appNode = document.querySelector("#container")
appNode.className ="container"

//Esta funcion se encargara de internacionalizar los precios 
const formatPrice = (price)=>{

    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD"
    }).format(price)

    return newPrice
}



//Usando fetch
window.fetch(`${API}/api/avo`)
    .then((rta) => rta.json())
    .then(rtaJson => {
        console.log(rtaJson);
        const rtaItems = []
        
        rtaJson.data.forEach(item => {
            const image = document.createElement("img")
            const title = document.createElement("h2")
            const price = document.createElement("div")

            image.src = API + item.image
            title.textContent = item.name
            price.textContent = formatPrice(item.price)
            price.className = "price"

            const container = document.createElement("div")
            container.className = "item__container"
            container.append(image, title, price)

            rtaItems.push(container)
            console.log(container);
        })
        appNode.append(...rtaItems)
    })

