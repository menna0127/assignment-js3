var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');

var sites = [] ;


if (localStorage.getItem("webSites") !=null ) {

    sites = JSON.parse(localStorage.getItem("webSites"));

    display();
    
}


function add() {
    var webSites = {
        name:siteNameInput.value,
        url:siteUrlInput.value
    }

    sites.push(webSites);

    localStorage.setItem("webSites" , JSON.stringify(sites) )
    
    display();

}



function display( ) {
    var data = '';
       
    for (let i = 0; i < sites.length; i++) {

        data+= `
        <tr>
                <td> ${i} </td>
                <td> ${sites[i]?.name} </td>
                <td>
                    <button class="btn btn-visit" onclick='visitSite(${i})'><i class="fa-solid fa-eye pe-2"></i>Visit</button>
                </td>
                <td>
                    <button class="btn btn-delete pe-2" onclick='deleteSite(${i})'>
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
            </tr>
       ` ;
        
    }

    tableData.innerHTML = data;
}



function visitSite(index){
    var getUrl = sites[index];

    open(getUrl?.url ,' _blank')

}

function deleteSite(index){
    sites.splice(index , 1);
    localStorage.setItem('webSites',JSON.stringify(sites))

    display()
}
