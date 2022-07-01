import fs from "fs/promises";

const fileOperation = async({filePath, action, data}) =>{
    switch(action){
        case "read":
            const text = await fs.readFile(filePath, "utf-8");
            console.log(text);
            // const result = await fs.readFile(filePath);
            // const text = result.toString();
            // console.log(text);
            break;
        case "add":
            await fs.appendFile(filePath, data);
            break;
        case "replace":
            await fs.writeFile(filePath, data);
            break;
    }
}

// fileOperation({filePath: "./files/file.txt", action: "read"})
// fileOperation({filePath: "./files/file.txt", action: "add", data: "\nПроблема кошерності Птеродактилю"})
// fileOperation({filePath: "./files/file.txt", action: "replace", data: "Проблема кошерності Птеродактилю"})
// fileOperation({filePath: "./files/file2.txt", action: "add", data: "\nПроблема кошерності Птеродактилю"})
fileOperation({filePath: "./files/file3.txt", action: "replace", data: "\nПроблема кошерності Птеродактилю"})

