// function name_name(str,time = "Day"){
//     console.log(`Hallo ${time} ${str}`);
// }

// name_name("buckaroo", "night");

let greet = function(userName){
    console.log("YOU GOT " + userName);
}

greet("MAIL");

let hello = (nameUser) => {
    console.log("WELCOME " + nameUser);
}

hello("eRIC")

function name_name(str,time = "Day"){
    return(`Hallo ${time} ${str}`);
}

const results = name_name("guy", "day");
console.log(results);

let shoppingList = ["chesse", "bread", "ham"]

const ul_list = document.querySelector(".shopping"); 
function populate(list){
    // alist.forEach(item){
    // item = `<li>${item}</li>`,
    // console. log (item);
    // }
    for (let i = 0; i < list.length; i++)
    {
        // console.log(list[i]);
        const ListItemElement = document.createElement("li");
        ListItemElement.textContent = list[i];
        ul_list.append(ListItemElement);

    }
}
populate(shoppingList)

function changeStyle(){
    ul_list.classList.add("squareList");
    ul_list.classList.remove("circleList");

}

changeStyle()

const images = document.querySelector("#shoppingCar")
function updateImage(){
    images.src = "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1351/2048x1365/filters:focal(1020x676:1021x677):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24195455/226406_Nvidia_RTX_4080_Review_TWarren_0001.jpg"
    images.width = 600;
    images.height = 300;
    images.alt = "My dream"
}
updateImage();