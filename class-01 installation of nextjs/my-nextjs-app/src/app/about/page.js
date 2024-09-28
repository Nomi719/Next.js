export default function About() {
    return (
      <>
       
{/* for routing now we gotta make the folder inside folder of app  */}
{/* and create a page.js file inside we can also create layout.js for that page loading.js and error.js do as there name is  */}
{/* for nested paths like/blogs/id  we can create folder inside blogs folder  */}
{/* and for dynamic routing instead of :id like we do in paths in react we do [id] -----> this would be the folder name in next js  */}


    <h1 className="text-6xl text-center">About</h1> 
    <p className="text-6xl text-center">
      this is my about page.
    </p>
     {/* it has buildin tailwind css aswell when installing */}
      
      </>
      
    );
  }