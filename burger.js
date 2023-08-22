const addveggies = (callback) => {
    setTimeout(() => {
        const veggies = "";
        console.log("veggies prepared", veggies);
        callback(veggies);
    }, 3000);
};



const addtikki = (veggies, Callback) => {
    setTimeout(() => {
        const tikki = veggies + "";
        console.log("tikki prepared", tikki)
        Callback(veggies);
    }, 2000);

}


const addburger = (veggies, tikki, Callback) => {
    setTimeout(() => {
        const burger = veggies + tikki + "";
        console.log("tikki prepared", tikki)
        Callback(burger);
    }, 3000);

}

addveggies((veggies) => {
    console.log("veggies is preparing");
    addtikki(veggies, (tikki) => {
        console.log("preparing for burger");
        addburger(veggies, tikki, (burger) => {
            console.log("burger is served");
        })
    })
})

