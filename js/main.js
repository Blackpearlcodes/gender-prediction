async function genderPrediction(){
          const name = document.getElementById('name').value
          if (name === ""){
                    alert("Please Enter Your Name")
          }
          else{
                    const URL=`https://api.genderize.io?name=${name}`
                    const Res= fetch(URL)
                    const response= await Res
                    const json= await response.json()
                    if (json["gender"] === null || json["probablity"] === 0){
                              alert("Unable to Identify your name 😥")
                    }
                    else{
                              const genderHolder = document.getElementById('gender')
                              const accuracyHolder = document.getElementById('accuracy')
                              genderHolder.innerHTML = json["gender"]
                              accuracyHolder.innerHTML = json["probability"] + "%"
                              console.log(json)
                    }
          }
}