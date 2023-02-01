const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');
const opacity = document.getElementById('opacity');
const campaignVisibility = document.getElementById('form');
const nameValue = document.getElementById('name');
const campaignType = document.getElementById('type');
const btnSave = document.getElementById('btn-save');
const dateFirst = document.getElementById('date-first');
const dateLast = document.getElementById('date-last');
const fRow = document.getElementById('f-row');
const landing = document.getElementById('landing')
const table = document.getElementById('table');
const remove = document.getElementById('remove')

let dateFirstObject = new Date(dateFirst);
let dateLastObject = new Date(dateLast);



add1.addEventListener('click', () => {
    opacity.classList.add('opacity');
    campaignVisibility.classList.add('campaign-visibility');
})
add2.addEventListener('click', () => {
    opacity.classList.add('opacity');
    campaignVisibility.classList.add('campaign-visibility');
})

remove.addEventListener('click', () => {
    campaignVisibility.classList.remove('campaign-visibility');
    opacity.classList.remove('opacity');
})

btnSave.addEventListener('click', function () {
    campaignVisibility.classList.remove('campaign-visibility');
    opacity.classList.remove('opacity');
    landing.classList.add('landing-visibility');
    table.classList.remove('table-visibility');



    var li = document.createElement('li');
    li.classList.add('table-row');

    // div 1 as a child of li
    var div1 = document.createElement('div');
    div1.classList.add('col');
    div1.classList.add('col-1');
    div1.innerText = `${nameValue.value}-${dateLast.value}`;
    li.appendChild(div1); 

    let campaignValue = campaignType.options[campaignType.selectedIndex].value;
    // div 2 as a child of li
    var div2 = document.createElement('div');
    div2.classList.add('col');
    div2.classList.add('col-2');
    div2.innerText = campaignValue;
    li.appendChild(div2);

    // div 3 as a child of li
    var div3 = document.createElement('div');
    div3.classList.add('col');
    div3.classList.add('col-3');
    div3.innerText = dateFirstObject > dateLastObject ? "Completed" : "Ongoing";
    li.appendChild(div3);

    // div 8 as a child of li
    var div4 = document.createElement('div');
    div4.classList.add('col');
    div4.classList.add('col-4');
    div4.innerHTML = "<i class='bx bx-x btn'></i>";
    li.appendChild(div4);

    // The if statement to identify if an entry has been made in name 
    if(nameValue.value === ''){
        alert('Enter a campaign name');
        // table.classList.add('table-visibility');
        // landing.classList.remove('landing-visibility');
    } else{
        fRow.appendChild(li);
    }
   

    nameValue.value = '';
    campaignValue.value = '';
    dateFirst.value = '';
    dateLast.value = '';

    div4.addEventListener('click', function (evt) {
        var target = evt.target;
        target.parentElement.parentElement.remove();
    });
    
});
