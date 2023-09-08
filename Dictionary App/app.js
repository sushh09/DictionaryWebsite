const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result= document.getElementById("result");
const sound=document.getElementById("sound");
const btn= document.getElementById("search-btn");

btn.addEventListener("click", ()=>{
    let inpword= document.getElementById("inp").value;
    fetch(`${url}${inpword}`)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        result.innerHTML =`
        <div class="word">
            <h3>${inpword}</h3>
        </div>
        <div class="answer">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetic}/</p>
        </div>
        <p class="answer-details" >
            ${data[0].meanings[0].definitions[0].definition} 
        </p>
        <p class="example">
            ${data[0].meanings[0].definitions[0].example || ""}
        </p>`; 
    })
    .catch(()=>{
        result.innerHTML=`<h4 class="error">Couldn't Find The Word</h4>`;
    });
});






