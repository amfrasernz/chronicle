
const students = [
    {
        name: "John Doe",
        degree: "Bachelor of Fine Arts",
        major: "Graphic Design",
        portfolio_link: "https://designshow.waikato.ac.nz/index.html",
        bio: "John Doe is a creative and talented graphic designer with a passion for visual storytelling and branding. He enjoys exploring various design techniques and concepts to create impactful and innovative designs. John is seeking opportunities to collaborate with like-minded professionals and contribute to meaningful projects.",
        project: {
            name: "Project 1",
            description: "A branding project for a local coffee shop, focusing on creating a cohesive visual identity including logo, packaging, and signage.",
            category: "Branding"
        }
    },
    {
        name: "Jane Smith",
        degree: "Master of Arts",
        major: "Visual Communication Design",
        portfolio_link: "https://designshow.waikato.ac.nz/index.html",
        bio: "Jane Smith is a versatile visual communication designer with experience in digital media and interactive design. She is passionate about user experience and interface design, with a focus on creating intuitive and engaging digital experiences. Jane is committed to pushing the boundaries of design and exploring new ways to communicate ideas visually.",
        project: {
            name: "Project 2",
            description: "An interactive website design project for a fictional travel agency, featuring user-friendly navigation and stunning visuals to inspire wanderlust.",
            category: "UI/UX"
        }
    },
    {
        name: "Michael Johnson",
        degree: "Bachelor of Design",
        major: "Industrial Design",
        portfolio_link: "https://designshow.waikato.ac.nz/index.html",
        bio: "Michael Johnson is an innovative industrial designer with a keen eye for detail and functionality. He enjoys solving complex design challenges and creating products that enhance the user experience. Michael is passionate about sustainable design practices and strives to integrate environmental considerations into his work.",
        project: {
            name: "Project 3",
            description: "A product design project for a portable solar charger, focusing on usability, durability, and eco-friendliness.",
            category: "Product Design"
        }
    },
    {
        name: "Sarah Williams",
        degree: "Bachelor of Fine Arts",
        major: "Illustration",
        portfolio_link: "https://designshow.waikato.ac.nz/index.html",
        bio: "Sarah Williams is a talented illustrator with a unique artistic style and a passion for storytelling. She enjoys bringing ideas to life through visual narratives and creating illustrations that evoke emotion and imagination. Sarah is seeking opportunities to collaborate with writers and publishers to illustrate children's books and graphic novels.",
        project: {
            name: "Project 4",
            description: "An illustration project for a children's book series, featuring whimsical characters and vibrant landscapes.",
            category: "Illustration"
        }
    },
    {
        name: "David Martinez",
        degree: "Master of Design",
        major: "User Experience Design",
        portfolio_link: "https://designshow.waikato.ac.nz/index.html",
        bio: "David Martinez is a dedicated user experience designer with expertise in user research and interaction design. He is passionate about creating seamless and intuitive digital experiences that meet the needs of users. David enjoys collaborating with cross-functional teams to translate user insights into innovative design solutions.",
        project: {
            name: "Project 5",
            description: "A user interface design project for a mobile app, focusing on enhancing user engagement and accessibility.",
            category: "UI/UX"
        }
    },
    {
        name: "Emily Brown",
        degree: "Bachelor of Arts",
        major: "Art Direction",
        portfolio_link: "https://designshow.waikato.ac.nz/index.html",
        bio: "Emily Brown is a creative art director with a background in visual arts and design. She has a keen eye for aesthetics and enjoys conceptualizing and directing visual campaigns across various media channels. Emily is passionate about leveraging design to communicate ideas and evoke emotion in audiences.",
        project: {
            name: "Project 6",
            description: "An advertising campaign project for a luxury fashion brand, featuring high-end photography and sophisticated design.",
            category: "Advertising"
        }
    },
    {
        name: "Christopher Lee",
        degree: "Bachelor of Fine Arts",
        major: "Animation",
        portfolio_link: "https://designshow.waikato.ac.nz/index.html",
        bio: "Christopher Lee is a skilled animator with a passion for storytelling and character design. He enjoys bringing characters to life through animation and exploring different animation techniques and styles. Christopher is seeking opportunities to work on animated films, TV shows, and interactive media projects.",
        project: {
            name: "Project 7",
            description: "An animation project for a short film, featuring expressive characters and fluid motion.",
            category: "Animation"
        }
    },
    {
        name: "Amy Taylor",
        degree: "Master of Fine Arts",
        major: "Exhibition Design",
        portfolio_link: "https://designshow.waikato.ac.nz/index.html",
        bio: "Amy Taylor is an experienced exhibition designer with expertise in creating immersive and engaging exhibition experiences. She enjoys conceptualizing and designing exhibition spaces that tell a compelling story and captivate audiences. Amy is passionate about using design to evoke emotions and provoke thought in viewers.",
        project: {
            name: "Project 8",
            description: "An exhibition design project for a museum exhibit, focusing on interactive elements and engaging storytelling.",
            category: "Exhibition Design"
        }
    }
];


$(document).ready(displayProjects(students));

function displayProjects(students) {
    let container = document.getElementById("projectsContainer");
    Array.from(students).forEach(student => {
        container.innerHTML += createProject(student);
    });
}

function createProject(student) {
    return `
    <div class="single-project op-2 row row-cols-1 row-cols-lg-2 row-gap-4 bg-white bg-opacity-75 p-4  align-items-center">
    <div class="col px-0">
        <div class="project-image-mask">
        <image src="./images/thumbnails/placeholder-img.png" class="img-fluid project-gallery-image" />
        </div>
    </div>
    <div class="col px-0 ps-lg-5 d-flex flex-column">
    <!--<h6 class="text-black-50">${student.project.category}</h6>-->
        <h3>${student.project.name}</h3>
        <p>by ${student.name}</p>
        <p class="small clamp">${student.project.description}</p>
        <a href="/" class="btn btn-light align-self-end">View Project <i class="bi bi-arrow-right"></i></a>
    </div>
    </div>
    `

    // return `
    // <div class="single-project op-1 row row-cols-1 row-cols-lg-2 row-gap-4 p-4 align-items-center">
    //             <div class="col px-0">
    //                 <div class="project-image-mask">
    //                     <img src="./images/website-hero-img-bg.jpg" class="img-fluid project-gallery-image" />
    //                 </div>
    //             </div>
    //             <div class="col px-0 ps-lg-5 d-flex flex-column">
    //                 <h3>Single Project</h3>
    //                 <p>by Student Name</p>
    //                 <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed nunc metus.
    //                     Mauris sed imperdiet nunc metus libero.</p>
    //                 <a href="/" class="btn btn-light text-end">View Project <i class="bi bi-arrow-right"></i></a>
    //             </div>
    //         </div>
    //`
}