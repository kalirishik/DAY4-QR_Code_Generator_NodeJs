import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';
inquirer
  .prompt([{
      message: "please type in the webpage URL",
      name: "URL"
  }
  ])
  .then((answers) => {
    const url =answers.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));


fs.writeFile("Qr_Code.txt",url,(error,data)=>{
    if(error) throw error;
        console.log("File Saved Successfully");
});
  })
  .catch((error) => {
      console.log(error);
  });

