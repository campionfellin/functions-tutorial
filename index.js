let template = ({ message, link1, link2, link1Label, link2Label }) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
            </head>
            <body>
            <p>
            ${message}
            </p>
            <div>
            <a href='${link1}'>${link1Label}</a>
            </div>
            <div>
            <a href='${link2}'>${link2Label}</a>
            </div>
            </body>
        </html>
    `;
};

exports.startAdventure = (req, res) => {
  res.status(200).send(template({
  message: `Greetings adventurer... Let us begin.
  Are you a knight or an elf?
  `,
  link1: req.url + "Knight",
  link2: req.url + "Elf",
  link1Label: "I am a knight, strong and skilled with a sword.",
  link2Label: "An elf, am I, known for my ranged ability."
  }));
};