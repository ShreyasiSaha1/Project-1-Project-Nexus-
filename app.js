let detlg=document.querySelector(".dtlogin");
      let detsg=document.querySelector(".dtsignup")
      let linklg=document.querySelector("#lnk-lg");
      let linksg=document.querySelector("#lnk-sg");
      function callsign(){
         detlg.classList.toggle("callreg");
         detsg.classList.toggle("setreg");
      }
         
      linklg.addEventListener("click",callsign);
      linksg.addEventListener("click",callsign);