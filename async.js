function delay(time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },time);
        });
    }

    async function placeorder(){
        await delay(2000);
        console.log("order taken");
    }

    async function startproduction(){
        await delay(2000);
        console.log("production started");
    }
    async function printId(){
        await delay(2000);
        console.log("id is printed");
    }
    async function productionname(){
        await delay(2000);
        console.log("name done");
    }
    async function productiondesc(){
        await delay(2000);
        console.log("description of production");
    }

    async function main(){
        console.log("11")
        await placeorder()

        console.log("22")
        await placeorder()

        console.log("22")
        await placeorder()

        console.log("55")
        await placeorder()
        console.log("55")
        await placeorder()

    }
    main()