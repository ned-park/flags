document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://restcountries.com/v3.1/name/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('section').innerHTML = ''
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          let out = document.createElement('div')
          let h2 = document.createElement('h2')
          let img = document.createElement('img')
          let p = document.createElement('p')

          document.querySelector('section').appendChild(out)
          out.appendChild(h2).innerText = data[i].name['official']
          out.appendChild(img).src = data[i].flags['png']
          out.appendChild(p).innerText = `The population is ${data[i].population}.`
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}