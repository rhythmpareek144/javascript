const placeorder = () => {
    return new promise(
        (reject, resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
}