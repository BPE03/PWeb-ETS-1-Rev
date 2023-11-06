let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            let jsondoc = JSON.parse(xhttp.responseText);
            for(let i = 0 ; i < 20 ; i++)
            {
                let name = jsondoc.results[i].name;
                i++;
                let namehtml = document.getElementById("name"+i);
                namehtml.innerHTML = name;
                i--;
                /*
                switch(i)
                {
                    case 0:
                        let namehtml = document.getElementById("name1");
                        namehtml.innerHTML = name;
                        break;
                    case 1:
                        let namehtml = document.getElementById("name2");
                        namehtml.innerHTML = name;
                        break;
                    case 2:
                        let namehtml = document.getElementById("name3");
                        namehtml.innerHTML = name;
                        break;
                    case 3:
                        let namehtml = document.getElementById("name4");
                        namehtml.innerHTML = name;
                        break;
                    case 4:
                        let namehtml = document.getElementById("name5");
                        namehtml.innerHTML = name;
                        break;
                    case 5:
                        let namehtml = document.getElementById("name6");
                        namehtml.innerHTML = name;
                        break;
                    case 6:
                        let namehtml = document.getElementById("name7");
                        namehtml.innerHTML = name;
                        break;
                    case 7:
                        let namehtml = document.getElementById("name8");
                        namehtml.innerHTML = name;
                        break;
                    case 8:
                        let namehtml = document.getElementById("name9");
                        namehtml.innerHTML = name;
                        break;
                    case 9:
                        let namehtml = document.getElementById("name10");
                        namehtml.innerHTML = name;
                        break;
                    case 10:
                        let namehtml = document.getElementById("name11");
                        namehtml.innerHTML = name;
                        break;
                    case 11:
                        let namehtml = document.getElementById("name12");
                        namehtml.innerHTML = name;
                        break;
                    case 12:
                        let namehtml = document.getElementById("name13");
                        namehtml.innerHTML = name;
                        break;
                    case 13:
                        let namehtml = document.getElementById("name14");
                        namehtml.innerHTML = name;
                        break;
                    case 14:
                        let namehtml = document.getElementById("name15");
                        namehtml.innerHTML = name;
                        break;
                    case 15:
                        let namehtml = document.getElementById("name16");
                        namehtml.innerHTML = name;
                        break;
                    case 16:
                        let namehtml = document.getElementById("name17");
                        namehtml.innerHTML = name;
                        break;
                    case 17:
                        let namehtml = document.getElementById("name18");
                        namehtml.innerHTML = name;
                        break;
                    case 18:
                        let namehtml = document.getElementById("name19");
                        namehtml.innerHTML = name;
                        break;
                    case 19:
                        let namehtml = document.getElementById("name20");
                        namehtml.innerHTML = name;
                        break;
                        
                } */
            }
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

loadDoc();