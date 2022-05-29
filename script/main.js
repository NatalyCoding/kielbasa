const insert = document.querySelector('#insert');
insert.addEventListener('click', () => {
    const alg = document.querySelector('#alg');
    alg.insertAdjacentHTML("afterbegin", "<ol><li>підійти до холодильника</li><li>відкрити дверку</li><li>знайти ковбасу</li><li>витягнути ковбасу</li><li>закрити дверку</li></ol>");
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    document.location.reload();
})