//create the about section if the user specified they wanted to create it
const generateAbout = aboutText => {
    if(!aboutText) {
        //if aboutText is undefined, user skipped section, return empty string
        return'';
     } else {

        //if aboutText contains user content, create About Me section in HTML document with user content displayed
         
        return`
            <section class="my-3" id="about">
                <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
                <p>${aboutText}</p>
            </section>`;
     }     
};

//generate the project section HTML data
const generateProjects = projectsArr => {
    //return HTML markup with formatted user project data for portfolio webpage
    return`
            <section class="my-3" id="portfolio">
                <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
                <div class="flex-row justify-space-between">

                <!--if user wants to feature project, return 'featured HTML' markup formatting - i.e. column is full page width (only col-12 in div class)-->
                ${projectsArr
                    .filter(({feature}) => feature)
                    .map(({name, description, languages, link}) => {
                    return`
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h3 class="portfolio-item-title text-light">${name}</h3>
                        <h5 class="portfolio-languages">
                        Built With:
                            ${languages.join(', ')}
                        </h5>
                        <p>${description}</p>
                        <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                    </div>`;
                    })
                    .join('')}

                <!--if user does NOT want to feature project, return 'non-featured HTML' markup formatting-->
                ${projectsArr
                    .filter(({feature}) => !feature)
                    .map(({name, description, languages, link}) => {
                    return`
                    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="portfolio-item-title text-light">${name}</h3>
                        <h5 class="portfolio-languages">
                        Built With:
                            ${languages.join(', ')}
                        </h5>
                        <p>${description}</p>
                        <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                    </div>`;
                    })
                    .join('')}
                </div>
            </section>`;
};


//generation of basic HTML site structure
module.exports = (templateData) => {

    //destructure projects and about data from templateData based on their property key names, and package the rest of the data in a new obj called header using the rest operator
    const {projects, about, ...header} = templateData;

    //return generated webpage with user information collected from inquirer prompts (in templateData) interpolated
    return`
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
                <nav class ="flex-row">
                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">Github</a>
                </nav>
            </div>
        </header>
        <main class="container my-5">
            ${generateAbout(about)}
            ${generateProjects(projects)}
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark"> &copy; ${new Date().getFullYear()} by ${header.name}</h3>
        </footer>
    <body>
    </html>`;
};