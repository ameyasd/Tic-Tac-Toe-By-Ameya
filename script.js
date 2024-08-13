let k = 0;
let cards = ['','','','','','','','',''];
let blank = ['','','','','','','','',''];
let winner = '';
let turnV = document.getElementById("turn");
let turnA = ['X','O'];
let won = false;

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');

function submitPlayer(){
    if(player1.value != player2.value && player1.value != '' && player2.value != ''){
       turnA = [player1.value,player2.value];
       document.getElementById('turn').innerHTML=`It's ${turnA[0]}'s Turn`;
    }
}


document.querySelectorAll('.cell').forEach(e => {
    e.addEventListener('click', ()=>{
        let j = document.getElementById(e.id);
        let z = parseInt(e.id.slice(4,5));
        let turnC = (k+1)%2;
        // console.log(turnC);
        // console.log("z="+z);
        // console.log(won);
        if( k%2 == 0 && k <= 8 && !won && cards[z-1]==''){
            
            j.innerHTML = 'X';
            cards[z-1]=j.innerHTML;
            // console.log(cards);
            k++;
        }
        else if(k%2 != 0 && k <= 8 && !won && cards[z-1]==''){
            j.innerHTML = 'O';
            cards[z-1]=j.innerHTML;
            // console.log(cards);
            k++;
        }
        // Winning Conditions!

        //vert 1
        if(cards[0]==cards[3] && cards[0]==cards[6] && cards[0]!=''){
            // winner = cards[0];
            won=true;
        }
        //vert 2
        if(cards[1]==cards[4] && cards[1]==cards[7] && cards[1]!=''){
            // winner = cards[1];
            won=true;
        }
        //vert 3
        if(cards[2]==cards[5] && cards[2]==cards[8] && cards[2]!=''){
            // winner = cards[2];
            won=true;
        }
        //horz 1
        if(cards[0]==cards[1] && cards[0]==cards[2] && cards[0]!=''){
            // winner = cards[0];
            won=true;
        }
        //horz 2
        if(cards[3]==cards[4] && cards[3]==cards[5] && cards[3]!=''){
            // winner = cards[3];
            won=true;
        }
        //horz 3
        if(cards[6]==cards[7] && cards[6]==cards[8] && cards[6]!=''){
            // winner = cards[6];
            won=true;
        }
        //diag L->R
        if(cards[0]==cards[4] && cards[0]==cards[8] && cards[0]!=''){
            // winner = cards[0];
            won=true;
        }
        //diag R->L
        if(cards[2]==cards[4] && cards[2]==cards[6] && cards[2]!=''){
            // winner = cards[2];
            won=true;
        }

        let winner = turnA[(k+1)%2];
        console.log(turnC, k%2)

        // if won is true:

        if(won){
            // document.body.style.backgroundColor="RED";
            document.getElementById('winner').innerHTML="The Winner Is: "+winner;
        }

        //if k<= 8;
        if(won==false && k<=8){
            turnV.innerHTML=`It's ${turnA[turnC]}'s Turn`;
        }
        //if draw:

        if(won==false && k>8){
            document.getElementById('winner').innerHTML="The Match Ended in a Draw! Click 'Restart' To Play Again :D";
        }
    });
});
function restartGame(){
    for (let p = 0; p < 10; p++) {
        cards[p]=blank[p];
    }
    won = false;
    k=0;
    document.querySelectorAll('.cell').forEach(n => {
        n.innerHTML = '';
    });
    document.getElementById('turn').innerHTML=`It's ${turnA[0]}'s Turn`;
}
