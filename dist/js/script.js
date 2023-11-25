

const mobilebtn = document.querySelector("#mobile-btn");
const mobilemenu = document.querySelector("#mobile-menu");

mobilebtn.addEventListener('click', () =>{
mobilemenu.classList.toggle('hidden');
}


);
function toggleDarkTheme(){
    if (localStorage.getItem("theme")== "dark"){
        localStorage.setItem("theme","light");
        document.documentElement.classList.remove("dark");

    }else{
        localStorage.setItem("theme","dark");
        document.documentElement.classList.add("dark");


    }

}
document.querySelector("button").addEventListener("click",toggleDarkTheme);

if (localStorage.getItem("theme") == "dark"){
    document.documentElement.classList.add("dark");
}


  







