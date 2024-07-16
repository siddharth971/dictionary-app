const url = "https://api.dictionaryapi.dev/api/v2/entries/en";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");


btn.addEventListener("click", function () {
    let wordinp = document.getElementById("inp-word").value;
    console.log(wordinp);
    fetch(`${url}/${wordinp}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data[0]);
        console.log(sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`))
        result.innerHTML = (`      <div class="word">
                <h3>
                    ${wordinp}
                </h3>
                <button onclick="playsound()">
                    <i class="fa-solid" fa-volume-high"></i>
                </button>
            </div>

            <div class="detail">
                <p>${data[0].meanings[0].partOfSpeech} </p>
                <p>${data[0].phonetic} </p>
            </div>
            <p class="word-meaning">
              1.  ${data[0].meanings[0].definitions[0].definition}<br>
              2.  ${data[0].meanings[0].definitions[2].definition}<br>
              3.  ${data[0].meanings[0].definitions[3].definition}<br>
              4.  ${data[0].meanings[0].definitions[1].definition}
            </p>

            <p class="word-example">
             ${data[0].meanings[0].definitions[0].example || " "} 
            </p>`);

        sound.setAttribute("src", data[0].phonetics[0].audio)
    });
})

function playsound() {
    sound.play()
}

