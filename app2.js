
const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Location</th>')
      res.write('<th>Number of hours that a visitor should spend</th>')
      res.write('<th>Amount to be spent</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Goa</td>')
      res.write('<td>150</td>')
      res.write('<td>$ 200</td>')
      res.write('</tr>')
      res.write('<td>Pondicherry</td>')
      res.write('<td>75</td>')
      res.write('<td>$ 150</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Vizag</td>')
      res.write('<td>100</td>')
      res.write('<td>$ 100</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Mumbai</td>')
      res.write('<td>50</td>')
      res.write('<td>$ 250</td>')
      res.write('</tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})
