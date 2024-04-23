const icon_urlElement = document.getElementById('icon_url');
const idElement = document.getElementById('id');
const urlElement = document.getElementById('url');
const valueElement = document.getElementById('value');

async function chucknorris(){
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const obj = await res.json();
    console.log(obj);
    const {icon_url, id, url, value} = obj;

    const imgElement = document.createElement('img');
    imgElement.src = "https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png";
    imgElement.alt= "foto"
    icon_urlElement.append(imgElement);

    idElement.textContent = id;
    urlElement.textContent = url;
    valueElement.textContent = value;
}
chucknorris();