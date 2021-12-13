/* --------------------------------------- BOTONES FILTRO --------------------------------------- */


filtroTodo.addEventListener("click", () => {
    constructorCardsYBtn(servicios)
})

/*------------------------------------------------------------------------------------------------*/

filtroDiseño.addEventListener("click", () => {
    const servDiseño = servicios.filter((serv) => serv.tipo === "diseño")

    constructorCardsYBtn(servDiseño)
})

/*---------------------------------------------------------------------------------------------*/

filtroDesarrollo.addEventListener("click", () => {
    const servDesarrollo = servicios.filter((serv) => serv.tipo === "desarrollo")

    constructorCardsYBtn(servDesarrollo)
})


/*----------------------------------------------------------------------------------------------------*/

filtroMarketing.addEventListener("click", () => {
    const servMarketing = servicios.filter((serv) => serv.tipo === "marketing")

    constructorCardsYBtn(servMarketing)
})


/*----------------------------------------------------------------------------------------------------*/