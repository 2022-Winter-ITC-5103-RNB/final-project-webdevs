function filter() {
    let search_value = document.getElementById('searchvalue').value;
    let search_list = document.getElementsByTagName('li');
    
    for (let i  of search_list){
        if(i.innerHTML.search(search_value) == -1){
            i.style.display="none";
        }
        else{
            i.style.display="Block";
        }
    }
}