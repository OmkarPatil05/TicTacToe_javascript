var isXActive = true;
var isMarked = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
];

var isWinner = [
    ["","",""],
    ["","",""],
    ["","",""]
];

function reset()
{
        document.getElementById("btn1").innerText = "click";
        document.getElementById("btn2").innerText = "click";
        document.getElementById("btn3").innerText = "click";
        document.getElementById("btn4").innerText = "click";
        document.getElementById("btn5").innerText = "click";
        document.getElementById("btn6").innerText = "click";
        document.getElementById("btn7").innerText = "click";
        document.getElementById("btn8").innerText = "click";
        document.getElementById("btn9").innerText = "click";
}

function validate()
{
    if(isWinner[0][0] =="X" && isWinner[0][1] =="X"  && isWinner[0][2] =="X" )
    {
        document.write("Winner is X Player ");
       reset();
        
    }

    if(isWinner[0][0] =="X" && isWinner[1][1] =="X"  && isWinner[2][2] =="X" )
    {
        document.write("Winner is X Player ");
       reset();
        
    }

    if(isWinner[0][0] =="X" && isWinner[1][0] =="X"  && isWinner[2][0] =="X" )
    {
        document.write("Winner is X Player ");
       reset();
        
    }

    if(isWinner[1][0] =="X" && isWinner[1][1] =="X"  && isWinner[1][2] =="X" )
    {
        document.write("Winner is X Player ");
       reset();
        
    }

    if(isWinner[2][0] =="X" && isWinner[2][1] =="X"  && isWinner[2][2] =="X" )
    {
        document.write("Winner is X Player ");
       reset();
        
    }

    if(isWinner[0][1] =="X" && isWinner[1][1] =="X"  && isWinner[2][1] =="X" )
    {
        document.write("Winner is X Player ");
       reset();
        
    }

    if(isWinner[0][2] =="X" && isWinner[1][2] =="X"  && isWinner[2][2] =="X" )
    {
        document.write("Winner is X Player ");
       reset();
        
    }

    if(isWinner[0][2] =="X" && isWinner[1][1] =="X"  && isWinner[2][0] =="X" )
    {
        document.write("Winner is X Player ");
       reset();
        
    }

    //---------------------------------------------------------------------------


    if(isWinner[0][0] =="O" && isWinner[0][1] =="O"  && isWinner[0][2] =="O" )
    {
        document.write("Winner is O Player ");
       reset();
        
    }

    if(isWinner[0][0] =="O" && isWinner[1][1] =="O"  && isWinner[2][2] =="O" )
    {
        document.write("Winner is O Player ");
       reset();
        
    }

    if(isWinner[0][0] =="O" && isWinner[1][0] =="O"  && isWinner[2][0] =="O" )
    {
        document.write("Winner is O Player ");
       reset();
        
    }

    if(isWinner[1][0] =="O" && isWinner[1][1] =="O"  && isWinner[1][2] =="O" )
    {
        document.write("Winner is O Player ");
       reset();
        
    }

    if(isWinner[2][0] =="O" && isWinner[2][1] =="O"  && isWinner[2][2] =="O" )
    {
        document.write("Winner is O Player ");
       reset();
        
    }

    if(isWinner[0][1] =="O" && isWinner[1][1] =="O"  && isWinner[2][1] =="O" )
    {
        document.write("Winner is O Player ");
       reset();
        
    }

    if(isWinner[0][2] =="O" && isWinner[1][2] =="O"  && isWinner[2][2] =="O" )
    {
        document.write("Winner is O Player ");
       reset();
        
    }

    if(isWinner[0][2] =="O" && isWinner[1][1] =="O"  && isWinner[2][0] =="O" )
    {
        document.write("Winner is O Player ");
       reset();
        
    }
}

function mark()
{
    if(isXActive && !isMarked[0][0])
    {
        document.getElementById("btn1").innerText = "X";    
        isXActive = false;
        isMarked[0][0] = true;
        isWinner[0][0] = "X";
    }
    else if(!isMarked[0][0])
    {
        document.getElementById("btn1").innerText = "O";
        isXActive = true;
        isMarked[0][0] = true;
        isWinner[0][0] = "O";

    }
    validate();
    
}
function mark1()
{
    if(isXActive && !isMarked[0][1])
    {
        document.getElementById("btn2").innerText = "X";
        isXActive = false;
        isMarked[0][1]=true;
        isWinner[0][1] = "X";
    }
    else if(!isMarked[0][1])
    {
        document.getElementById("btn2").innerText = "O";
        isXActive = true;
        isMarked[0][1]=true;
        isWinner[0][1] = "O";



    }
    validate();
  
}

function mark2()
{
    if(isXActive && !isMarked[0][2])
    {
        document.getElementById("btn3").innerText = "X";
        isXActive = false;
        isMarked[0][2] = true;
        isWinner[0][2] = "X";
    }   
    else if(!isMarked[0][2])
    {
        document.getElementById("btn3").innerText = "O";
        isXActive = true;
        isMarked[0][2] = true;
        isWinner[0][2] = "O";

    }
    validate();
}

 function mark3()
{
    if(isXActive && !isMarked[1][0])
    {
        document.getElementById("btn4").innerText = "X";
        isXActive = false;
        isMarked[1][0] = true;
        isWinner[1][0] = "X";
    }
    else if(!isMarked[1][0])
    {
        document.getElementById("btn4").innerText = "O";
        isXActive = true;
        isMarked[1][0] = true;
        isWinner[1][0] = "0";
    }
   validate();
}

function mark4()
{
    if(isXActive && !isMarked[1][1])
    {
        document.getElementById("btn5").innerText = "X";
        isXActive = false;
        isMarked[1][1] = true;
        isWinner[1][1] = "X";
    }
    else if(!isMarked[1][1])
    {
        document.getElementById("btn5").innerText = "O";
        isXActive = true;
        isMarked[1][1] = true;
        isWinner[1][1] = "O";
    }
   validate();
}

function mark5()
{
    if(isXActive && !isMarked[1][2])
    {
        document.getElementById("btn6").innerText = "X";
        isXActive = false;
        isMarked[1][2] = true;
        isWinner[1][2] = "X";
    }
    else if(!isMarked[1][2])
    {
        document.getElementById("btn6").innerText = "O";
        isXActive = true;
        isMarked[1][2] = true;
        isWinner[1][2] = "O";
    }
   validate();
}
 function mark6()
{
    if(isXActive && !isMarked[2][0])
    {
        document.getElementById("btn7").innerText = "X";
        isXActive = false;
        isMarked[2][0] = true;
        isWinner[2][0] = "X";
    }
    else if(!isMarked[2][0])
    {
        document.getElementById("btn7").innerText = "O";
        isXActive = true;
        isMarked[2][0] = true;
        isWinner[2][0] = "O";

    }
    validate();
}
function mark7()
{
    if(isXActive && !isMarked[2][1])
    {
        document.getElementById("btn8").innerText = "X";
        isXActive = false;
        isMarked[2][1] =  true;
        isWinner[2][1] = "X";

    }
    else if(!isMarked[2][1])
    {
        document.getElementById("btn8").innerText = "O";
        isXActive = true;
        isMarked[2][1] =  true;
        isWinner[2][1] = "O";

    }
   validate();
}
function mark8()
{
    if(isXActive && !isMarked[2][2])
    {
        document.getElementById("btn9").innerText = "X";
        isXActive = false;
        isMarked[2][2] =  true;
        isWinner[2][2] = "X";

    }
    else if( !isMarked[2][2])
    {
        document.getElementById("btn9").innerText = "O";
        isXActive = true;
        isMarked[2][2] =  true;
        isWinner[2][2] = "O";

    }
    validate();
}