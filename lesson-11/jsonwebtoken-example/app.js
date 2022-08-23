const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "6304f3243a1bdfa0320fcc31"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const result = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDRmMzI0M2ExYmRmYTAzMjBmY2MzMSIsImlhdCI6MTY2MTI3MDE5NSwiZXhwIjoxNjYxMjczNzk1fQ.hOz_iJZbv9i8yvVClvc3EAHpHmtf8WcGrBRZke-Lb-u", SECRET_KEY);
    console.log(result);
} catch (error) {
    console.log(error.message);
}