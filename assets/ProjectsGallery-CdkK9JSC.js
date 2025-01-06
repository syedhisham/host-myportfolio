import{r as n,j as e,b as u,L as p,H as h}from"./index-C5lsFWcD.js";const f=({textColorClass:a})=>{const[o,r]=n.useState(0),[t,s]=n.useState("My"),l=["Projects","Hard Work","Journey","Passion"];return n.useEffect(()=>{const m=setInterval(()=>{const c=`My ${l[o]}`,d=t.length;d<c.length?s(i=>i+c[d]):setTimeout(()=>{r(i=>(i+1)%l.length),s("My")},1e3)},150);return()=>clearInterval(m)},[t,o]),e.jsxs("div",{className:"mb-12",children:[e.jsx("h1",{className:"text-4xl font-bold awsomeTextColor inline-block",children:t}),e.jsx("p",{className:"text-lg text-gray-400 mt-2",children:"A showcase of my work, demonstrating expertise in full-stack development and problem-solving."})]})},y=({textColorClass:a,fontClass:o})=>{const r=[{title:"HandicraftStore",description:`
        HandicraftStore is a full-stack e-commerce platform designed to connect artisans and buyers, 
        focusing on promoting and selling handcrafted products. The platform provides an intuitive and 
        responsive experience for both sellers and buyers, enabling sellers to manage their shops, upload 
        products, and monitor sales, while buyers can browse categories, view product details, and place 
        orders seamlessly.
      `,githubLink:"https://github.com/syedhisham/HandicraftStore",videoSrc:"https://res.cloudinary.com/dqlyxvgcc/video/upload/v1736008335/MyPortfolio/sit3uumcvg54yo7gxevn.mp4"},{title:"E-Commerce Shoe Store",description:`
        The Shoe Shop is a full-stack e-commerce web application for a shoe store. The project provides 
        a platform for customers to browse, search, and purchase various types of footwear, including shoes, 
        sandals, and slippers for both men and women. It features a dynamic front-end, a robust back-end, and 
        integrates with a MongoDB database for seamless product management.
      `,githubLink:"https://github.com/syedhisham/The-Shoe-Shop",videoSrc:"https://res.cloudinary.com/dqlyxvgcc/video/upload/v1736008095/MyPortfolio/oxjyilua6puerp0xoe98.mp4"},{title:"TaskFlow",description:`
        TaskFlow is a MERN Stack project, specifically a Todo application that enables users to efficiently 
        manage their tasks. Users can add new tasks by entering a title and description, delete tasks with a 
        single click, and update existing tasks to modify details or mark them as completed. The application 
        offers a user-friendly interface for viewing all tasks, with options to filter them by status, such as 
        completed or pending. Overall, TaskFlow provides a seamless and intuitive experience for effective task 
        management.
      `,githubLink:"https://github.com/syedhisham/TaskFlow",videoSrc:"https://res.cloudinary.com/dqlyxvgcc/video/upload/v1736008009/MyPortfolio/iezyxbd9qgjdymj5n1qd.mp4"},{title:"PoultryPal",description:`
        PoultryPal is a web-based poultry farm management system designed to centralize and streamline operations such as Human Resource Management, Point of Sale, Flock Monitoring, and Inventory Management. Built with MongoDB, Node.js, and React.js, it offers real-time insights, improves productivity, and enhances decision-making for modern poultry farms.
      `,githubLink:"https://github.com/syedhisham/PoultryPal",videoSrc:"https://res.cloudinary.com/dqlyxvgcc/video/upload/v1736008232/MyPortfolio/oshzoubia52yybjw87ie.mp4"}];return e.jsxs("div",{className:`py-10 ${o}`,children:[e.jsxs("div",{className:"container mx-auto px-4 lg:px-0 mt-20 mb-20 max-w-5xl",children:[e.jsx(f,{textColorClass:a}),e.jsx("div",{className:"space-y-20",children:r.map((t,s)=>e.jsxs("div",{className:`flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0 md:space-x-8 ${s%2===0?"":"md:flex-row-reverse"}`,children:[e.jsx("div",{className:"bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full md:w-1/2",children:e.jsx("video",{className:"w-full h-auto",controls:!0,loop:!0,muted:!0,src:t.videoSrc})}),e.jsxs("div",{className:"awsomeIndigoColor space-y-4 w-full md:w-1/3",children:[e.jsx("h2",{className:"text-xl font-bold",children:t.title}),e.jsx("p",{className:"blue-gray",children:t.description}),e.jsxs("a",{href:t.githubLink,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-start gap-2 transition-transform transform hover:scale-100",children:[e.jsx(u.Button,{variant:"outlined",className:`w-64 px-4 py-2 text-sm font-medium awsomeIndigoColor border-${a} rounded-lg hover:bg-white/20`,title:"Git repository link",children:"View on GitHub"}),e.jsx(p,{className:"absolute left-52 awsomeIndigoColor text-lg transition-transform duration-300 group-hover:translate-x-3"})]})]})]},s))})]}),e.jsx("div",{className:"container mx-auto",children:e.jsx(h,{})})]})};export{y as default};