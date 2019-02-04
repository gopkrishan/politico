const timeNow = Date.now()
let fetchTime
window.onload = () => {

const tab = document.querySelector('.tab')
const tabButton = tab.querySelectorAll('button')

tabButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        name = e.currentTarget.attributes.name.value
        openCity(e, name)
    })
})


function openCity(evt, name) {

    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Parties
const partyTable = document.querySelector('.party-edit-info')

    fetchFunc.getData(`${url}/parties`)
    .then((res) => {
        fetchTime = Date.now() - timeNow;
        console.log(res)
        if(!res.data.length){
            partyTable.innerHTML = `<h1>No Parties</h1>`
        } else {
            partyTable.innerHTML = res.data.map((party) => {
            return `<tr key=${party.id}>
                    <td>${party.name}</td>
                    <td>${party.hqaddress}</td>
                    <td>${partylogo(party.logourl)}</td>
                    <td class="edit-party"><i class="fas fa-pen"></i></td>
                    <td class="delete-party"><i class="fas fa-trash"></i></td>
                    </tr>
                `
        }).join(' ')
        }
    })
    .catch(err => err);

const partylogo = (logoUrl) => {
   if (logoUrl === 'logo123'){
       return 'No logo'
   }
   return `<img src="${url}/images/${logoUrl}"></img>`
}

}
