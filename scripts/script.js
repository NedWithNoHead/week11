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
        console.log(list[i]);
        const ListItemElement = document.createElement("li");
        ListItemElement.textContent = list[i];
        ul_list.append(ListItemElement);

    }
}
populate(shoppingList)