const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    // console.log(salt);
    const result = await bcrypt.hash(password, 10);
    // console.log(result);
    const comparePassword = await bcrypt.compare(password, result);
    console.log(comparePassword);
    const comparePassword2 = await bcrypt.compare("123457", result);
    console.log(comparePassword2);
}

hashPassword("123456")