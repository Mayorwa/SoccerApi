 window.onload = function(){
    var proxyURL = 'https://cors-anywhere.herokuapp.com';
    var url = "https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=f7dc7cf154eca024759a8f52529e0976d037d506a00a56c0bfaa757f3290a4ff";
    var method = 'GET';
    var T = new XMLHttpRequest();
    T.open(method, proxyURL + '/' + url,true);
    //M.open(method,url,true);
    T.setRequestHeader("X-Mashape-Key","f7dc7cf154eca024759a8f52529e0976d037d506a00a56c0bfaa757f3290a4ff"); //("X-Mashape-Host", "football-livescore.p.mashape.com");
    /* in the onload means when the data has been gotten it should go to a function with an event called response */
    T.onload = function(Table){
    let data = JSON.parse(Table.currentTarget.response);
    console.log(data);
    var data = JSON.parse(Table.currentTarget.response);
    }
    for(var t = 0; t < data.length; t++){
            var trelement = document.createElement("tr");
            var td0element = document.createElement("td");
            var td1element = document.createElement("td");
            var td2element = document.createElement("td");
            var td3element = document.createElement("td");
            var td4element = document.createElement("td");
            var td5element = document.createElement("td");
            var td6element = document.createElement("td");
            var td7element = document.createElement("td");
            var td8element = document.createElement("td");
            var td9element = document.createElement("td");

            document.getElementById('begin').appendChild(trelement);
            containerelement.setAttribute("id", "trid" + t);

            document.getElementById("trid" + t).appendChild(td0element);
            td0element.setAttribute("id", "td0" +t);
            document.getElementById("td0" +t).innerText = data[t].overall_league_position;

            document.getElementById("trid" + t).appendChild(td1element);
            td1element.setAttribute("id", "td1" +t);
            document.getElementById("td1" +t).innerText = data[t].overall_league_position;

            document.getElementById("trid" + t).appendChild(td2element);
            td2element.setAttribute("id", "td2" +t);
            document.getElementById("td2" +t).innerText = data[t].overall_league_position;

            document.getElementById("trid" + t).appendChild(td3element);
            td3element.setAttribute("id", "td3" +t);
            document.getElementById("td3" +t).innerText = data[t].overall_league_position;

            document.getElementById("trid" + t).appendChild(td4element);
            td4element.setAttribute("id", "td4" +t);
            document.getElementById("td4" +t).innerText = data[t].overall_league_position;

            document.getElementById("trid" + t).appendChild(td5element);
            td5element.setAttribute("id", "td5" +t);
            document.getElementById("td5" +t).innerText = data[t].overall_league_position;

            document.getElementById("trid" + t).appendChild(td6element);
            td6element.setAttribute("id", "td6" +t);
            document.getElementById("td6" +t).innerText = data[t].overall_league_position;

            document.getElementById("trid" + t).appendChild(td7element);
            td7element.setAttribute("id", "td1" +t);
            document.getElementById("td7" +t).innerText = data[t].overall_league_position;

            document.getElementById("trid" + t).appendChild(td8element);
            td8element.setAttribute("id", "td1" +t);
            document.getElementById("td8" +t).innerText = data[t].overall_league_position;

            document.getElementById("trid" + t).appendChild(td9element);
            td9element.setAttribute("id", "td9" +t);
            document.getElementById("td9" +t).innerText = data[t].overall_league_position;
    }
    T.send();
    }