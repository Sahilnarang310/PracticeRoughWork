const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');

    let message = ''; 

    if (fs.existsSync('message1.txt')) {
      message = fs.readFileSync('message1.txt', 'utf-8');
    }

    res.write('<form action="/message" method="POST">');
    if (message) {
      res.write(`<label for="message">${message}</label><br>`);
    } else {
      res.write('<label for="message">Message:</label>');
    }
    res.write('<input type="text" id="message" name="message">');
    res.write('<button type="submit">Send Message</button>');
    res.write('</form>');

    res.write('</body></html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const newMessage = parseBody.split('=')[1];
      fs.writeFile('message1.txt', newMessage, () => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello From Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3700);
