* {
  
    box-sizing: border-box;
    
}


body {
    background-color: #663399c4;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100vh;
    }

   .phone {
    position: relative;
    overflow: hidden;
    border: 3px solid #eee;
    border-radius: 15px;
    height: 600px;
    width: 340px;
   }

   .phone .content {
    position: absolute;
    opacity: 0;
    object-fit: cover;
    top:0;
    left: 0;
    width: 100%;
    transition: opacity 0.3s ease;
    height: calc(100% - 60px);
   }

   .phone .content.show {
    opacity: 1;
   }

   nav {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-top: -5px;
    width: 100%;
   }

   nav ul {
    background-color: #fff;
     display: flex;
     margin: 0;
     padding: 0;
     height: 60px;
     list-style-type: none;
   }

    nav li {
        cursor: pointer;
        color: #777;
        text-align: center;
        flex: 1;
        padding: 10px;
    }

    nav ul li p {
        margin: 2px 0;
        font-size: 12px;
    }

    nav ul li:hover,
    nav ul li.active {
        color: #663399c4;
    }
