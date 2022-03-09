const container = document.getElementById("container");
const body = document.querySelector("body");

container.style.display = "flex";
container.style.flexShrink = "0";
container.style.flexDirection = "column";
container.style.width = "960px";
container.style.height = "960px";
container.style.backgroundColor = "white";

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.backgroundColor = "lightgray";


function createGrid(numberOfSquares){
    const divArray = [];
    const rowContainers = [];
    for(let i = 1; i <= numberOfSquares*numberOfSquares; i++){
        divArray[i-1] = document.createElement("div");//.setAttribute("id","div"+i) done
        divArray[i-1].setAttribute("id","div"+i);
    }
    for(let i = 1; i <= numberOfSquares; i++){
        rowContainers[i-1] = document.createElement("div");//.setAttribute("id","rowContainer"+i) done
        rowContainers[i-1].setAttribute("id","rowContainer"+i);
    }
    let count = 0;
    for(let i = 1; i<=numberOfSquares; i++){

        for(let j = 1; j<=numberOfSquares; j++){
            if(count<(numberOfSquares*numberOfSquares)){
                rowContainers[i-1].appendChild(divArray[j-1+count]);
            }
        }
        count = count + numberOfSquares;
        container.appendChild(rowContainers[i-1]);
    }
    for(let i = 0; i<numberOfSquares*numberOfSquares; i++){
        divArray[i].style.display = "flex";
        divArray[i].style.flex = "1 0 auto";
        divArray[i].style.height = "auto";
        divArray[i].style.justifyContent = "center";
        divArray[i].style.alignItems = "center";
        divArray[i].addEventListener("mouseover", function(e){
            this.classList.add("purple");
        });
    }
    for(let i = 0; i < numberOfSquares; i++){
        rowContainers[i].style.display = "flex";
        rowContainers[i].style.flex = "1 0 auto";
        rowContainers[i].style.height = "auto";
    }
}

const button = document.getElementById("newGrid");
button.addEventListener("click",function(e){
    container.innerHTML = "";
    var userEnteredValue = prompt("How many squares per side?");
    if(userEnteredValue>100){
        window.alert("Please enter a value that is less than or equal to 100");
    }else{
        createGrid(parseInt(userEnteredValue));
    }
});