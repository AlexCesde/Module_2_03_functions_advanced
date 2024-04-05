function example() {
    const fruits = ["Apple", "Pineapple"];
    const fruitsBox = [{ name: "Apple" }, { name: "Pineapple" }]

    // Blender(fruits);
    // BlenderObject(fruitsBox);
    // BlenderRest(1);
}

function Blender(fruits) {
    let out = ""

    // forEach function
    fruits.forEach(item => {
        out += `<h1>Data: ${item}</h1>`;
    });

    document.getElementById("root").innerHTML = out;
}

function BlenderObject(fruits) {
    let out = ""

    // forEach function
    fruits.forEach(item => {
        out += `<h1>Data: ${item['name']}</h1>`;
    });

    // forEach function
    fruits.forEach(item => {
        out += `<h1>Data: ${item.name}</h1>`;
    });

    document.getElementById("root").innerHTML = out;
}

function BlenderRest(...fruits) {
    let out = ""

    // forEach function
    fruits.forEach(item => {
        out += `<h1>Data: ${item}</h1>`;
    });

    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);