let htmlString = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lisa's Memory Game</title>
    <link rel="stylesheet" href="style.css">
    <header>
        <div class="gameName">
            <p> BIKINI BOTTOM MEMORY GAME</p>
        </div>
    </header>
</head>
<body id="something">
    
  <section class="box">
      <div class="card" data-name="rainbow">           
          <img class="back" src="images/rainbow.jpeg"/>
          <img class="front" src="images/front.jpeg"/> 
      </div>

      <div class="card" data-name="squid">
            <img class="back" src="images/squid.jpeg"/>
        <img class="front" src="images/front.jpeg"/>        
        </div>

        <div class="card" data-name="rainbow">
                <img class="back" src="images/rainbow.jpeg"/>
            <img class="front" src="images/front.jpeg"/>            
        </div>

        <div class="card" data-name="squid">
                <img class="back" src="images/squid.jpeg"/>
            <img class="front" src="images/front.jpeg"/>            
        </div>

        <div class="card" data-name="pat">
                <img class="back" src="images/pat.jpeg"/>
            <img class="front" src="images/front.jpeg"/>            
        </div>
  
        <div class="card" data-name="trio">
                <img class="back" src="images/trio.jpeg"/>
          <img class="front" src="images/front.jpeg"/>          
          </div>
  
          <div class="card" data-name="pat"> 
              <img class="back" src="images/pat.jpeg"/>
              <img class="front" src="images/front.jpeg"/>
          </div>
  
          <div class="card" data-name="trio">
                <img class="back" src="images/trio.jpeg"/>
              <img class="front" src="images/front.jpeg"/>              
          </div>

          <div class="card" data-name="gary">
                <img class="back" src="images/gary.jpeg"/>
            <img class="front" src="images/front.jpeg"/>            
        </div>
  
        <div class="card" data-name="krabs">
                <img class="back" src="images/krabs.jpeg"/>
          <img class="front" src="images/front.jpeg"/>
          </div>
  
          <div class="card" data-name="gary">
                <img class="back" src="images/gary.jpeg"/>
              <img class="front" src="images/front.jpeg"/>              
          </div>
  
          <div class="card" data-name="krabs">
                <img class="back" src="images/krabs.jpeg"/>
              <img class="front" src="images/front.jpeg"/>             
          </div>
           <script src="script.js"></script>
  </section> 
</body>
</html>`;

module.exports = htmlString;