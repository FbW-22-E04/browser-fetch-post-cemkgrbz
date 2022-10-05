// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
// import "babel-polyfill";


// \/ All of your javascript should go here \/

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const button = document.querySelector("button");
const checkbox = document.querySelector("#checkbox")

name.focus()

async function handleClick(e) {
    e.preventDefault();

    
    const data = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.checked
    };

    // const settings = {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8'
    //     }
    // };

    // try {
    
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts', settings);

    //     if (response.status === 201) alert('Thanks your profile has been saved')

    //     const responseJson = await response.json()

    // } catch (error) {
    //     console.log(error.message)
        
    // }

    try {

        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);

        if (response.status === 201) alert('Your profile has been saved');
        console.log("response", response);

    } catch (error) {
        console.log(error.message)
        
    }
}

button.addEventListener("click", handleClick);

