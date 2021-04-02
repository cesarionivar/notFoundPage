const notFound = () => {

    const view = `
        <h1>Page Not found!</h1>
        <img src="./assets/notFound.svg" alt="Not Found">
        <p>Please, review the url to see if there's any mistake</p>
    `;
    return view;
}

export default notFound;