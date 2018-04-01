 window.onload = function() {
        GetRData();
}
function GetRData(){
        var proxyURL = 'https://cors-anywhere.herokuapp.com';
        var url = "https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=f7dc7cf154eca024759a8f52529e0976d037d506a00a56c0bfaa757f3290a4ff";
        var method = 'GET';
        var M = new XMLHttpRequest();
        M.open(method, proxyURL + '/' + url,true);
        //M.open(method,url,true);
        M.setRequestHeader("X-Mashape-Key","f7dc7cf154eca024759a8f52529e0976d037d506a00a56c0bfaa757f3290a4ff"); //("X-Mashape-Host", "football-livescore.p.mashape.com");
        /* in the onload means when the data has been gotten it should go to a function with an event called response */
        M.onload = function(Mayor){
        let data = JSON.parse(Mayor.currentTarget.response);
        console.log(data);
        
        for(var i = 0; i < data.length; i++){
        var containerelement = document.createElement("div");
        var rowelement = document.createElement("div");
        var firstpelement = document.createElement("p");
        var firstcolelement = document.createElement("div");
        var secoundcolelement = document.createElement("div");
        var thirdcolelement = document.createElement("div");
        var fourthcolelement = document.createElement("div");
        var divinelement1 = document.createElement("div");
        var pinmatchtime1 = document.createElement("p");
        var pinmatchtime2 = document.createElement("p");
        var divinmd41 = document.createElement("div");
        var pinclubdetails1 = document.createElement("p");
        var pinclubdetails2 = document.createElement("p");
        var divinmd411 = document.createElement("div");
        var pinposition = document.createElement("p");
        var vsincolmd = document.createElement("p");
        var divinlastmd = document.createElement("div");
        var pinclubname = document.createElement("p");
        var pinmatchdetails1 = document.createElement("p");
        var divinmd42 = document.createElement("div");
        var pinmatchstatus2 = document.createElement("p");

        document.getElementById('Creationbegin').appendChild(containerelement);
        containerelement.setAttribute("class", "container-fluid");
        containerelement.setAttribute("id", "containerid" + i);

        document.getElementById('containerid'+ i).appendChild(rowelement);
        rowelement.setAttribute("class", "row res-item");
        rowelement.setAttribute("id", "rowid" + i);

        document.getElementById("rowid" + i).appendChild(firstpelement);
        firstpelement.setAttribute("class", "league-name");
        firstpelement.setAttribute("id", "league-name" +i);
        document.getElementById("league-name" +i).innerText = data[i].league_name;

        document.getElementById("rowid" + i).appendChild(firstcolelement);
        firstcolelement.setAttribute("class", "col-md-2");
        firstcolelement.setAttribute("id", "firsttwo" +i);

        document.getElementById("rowid" + i).appendChild(secoundcolelement);
        secoundcolelement.setAttribute("class", "col-md-4");
        secoundcolelement.setAttribute("id", "firstfour" +i);

        document.getElementById("rowid" + i).appendChild(thirdcolelement);
        thirdcolelement.setAttribute("class", "col-md-2");
        thirdcolelement.setAttribute("id", "secoundtwo" +i);

        document.getElementById("rowid" + i).appendChild(fourthcolelement);
        fourthcolelement.setAttribute("class", "col-md-4");
        fourthcolelement.setAttribute("id", "secoundfour" +i);

        document.getElementById("firsttwo" +i).appendChild(divinelement1);
        divinelement1.setAttribute("class", "res-machtime");
        divinelement1.setAttribute("id", "matchtime" +i);

        document.getElementById("matchtime" +i).appendChild(pinmatchtime1);
        pinmatchtime1.setAttribute("id", "matchcat" +i);
        document.getElementById("matchcat" +i).innerText = data[i].match_time;

        document.getElementById("matchtime" +i).appendChild(pinmatchtime2);
        pinmatchtime2.setAttribute("id", "matchdate" +i);
        document.getElementById("matchdate" +i).innerText = data[i].match_date;

        document.getElementById("firstfour" +i).appendChild(divinmd41);
        divinmd41.setAttribute("class", "res-club");
        divinmd41.setAttribute("id", "homeclub" +i);

        document.getElementById("homeclub" +i).appendChild(pinclubdetails1);
        pinclubdetails1.setAttribute("id", "clubname" +i);
        document.getElementById("clubname" +i).innerText = data[i].match_hometeam_name;

        document.getElementById("homeclub" +i).appendChild(pinclubdetails2);
        pinclubdetails2.setAttribute("class", "res-club-score");
        pinclubdetails2.setAttribute("id", "gamescore" +i);
        document.getElementById("gamescore" +i).innerText = data[i].match_hometeam_score;

        document.getElementById("homeclub" +i).appendChild(divinmd411);
        divinmd411.setAttribute("class", "res-goal-scorer");
        divinmd411.setAttribute("id", "gamescorersdiv" +i);
        
        for(var r=0; r<data[i].goalscorer.length; r++){
                var pingoalscorers = document.createElement("p");
                document.getElementById("gamescorersdiv" +i).appendChild(pingoalscorers);
                pingoalscorers.setAttribute("id", "goalscorer" +i +r);
                document.getElementById("goalscorer" +i +r).innerText = data[i].goalscorer[r].home_scorer;
        }

        document.getElementById("homeclub" +i).appendChild(pinposition);
        pinposition.setAttribute("id", "position" +i);
        pinposition.setAttribute("class", "res-match-status");
        document.getElementById("position" +i).innerText = "HOME";

        document.getElementById("secoundtwo" +i).appendChild(vsincolmd);
        vsincolmd.setAttribute("class", "res-versus");
        vsincolmd.setAttribute("id", "res-versus" +i);
        document.getElementById("res-versus" +i).innerText = "VS";

        document.getElementById("secoundfour" +i).appendChild(divinlastmd);
        divinlastmd.setAttribute("class", "res-club");
        divinlastmd.setAttribute("id", "rest-clubdetails" +i);

        document.getElementById("rest-clubdetails" +i).appendChild(pinclubname);
        pinclubname.setAttribute("id", "rest-clubname" +i);
        document.getElementById("rest-clubname" +i).innerText = data[i].match_awayteam_name;

        document.getElementById("rest-clubdetails" +i).appendChild(pinmatchdetails1);
        pinmatchdetails1.setAttribute("class", "res-club-score");
        pinmatchdetails1.setAttribute("id", "gamescore2" +i);
        document.getElementById("gamescore2" +i).innerText = data[i].match_awayteam_score;

        document.getElementById("rest-clubdetails" +i).appendChild(divinmd42);
        divinmd42.setAttribute("class", "res-goal-scorer");
        divinmd42.setAttribute("id", "gamescorersdiv2" +i);
        
        for(var b=0; b<data[i].goalscorer.length; b++){
                var pingoalscorers2 = document.createElement("p");
                document.getElementById("gamescorersdiv2" +i).appendChild(pingoalscorers2);
                pingoalscorers2.setAttribute("id", "goalscorer2" +i +b);
                document.getElementById("goalscorer2" +i +b).innerText = data[i].goalscorer[b].away_scorer;
        }

        document.getElementById("rest-clubdetails" +i).appendChild(pinmatchstatus2);
        pinmatchstatus2.setAttribute("id", "position2" +i);
        pinmatchstatus2.setAttribute("class", "res-match-status");
        document.getElementById("position2" +i).innerText = "AWAY";
        
        
        }
        }
        M.send();
}