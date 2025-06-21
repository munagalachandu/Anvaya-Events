import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Main Heading */}
        <div className="bg-gradient-to-br from-purple-100 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-900 mb-12">
              About Us
            </h1>
          </div>
        </div>

        {/* About Anvaya Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-purple-800">About Anvaya</h2>
                <p className="text-2xl font-semibold text-purple-600 mb-4">Will. Work. Win.</p>
                <p className="text-gray-700 leading-relaxed">
                  Anvaya is the official departmental club—a unified front for all academic, cultural, and technical events within the department. It was established as a student-led initiative to coordinate, streamline, and elevate all intra- and inter-departmental activities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From hosting vibrant festivals to managing workshops and competitions, Anvaya serves as the one-stop hub that reflects the collective enthusiasm, creativity, and leadership of our student community. True to its motto—Will. Work. Win.—Anvaya is a dynamic embodiment of unity and execution.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative group aspect-[4/3] w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src="anvaya-about.jpg" 
                    alt="About Anvaya" 
                    className="relative rounded-lg shadow-xl w-full h-full object-contain object-center transform transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About TCC Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-purple-800">About The Central Committee (TCC)</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Central Committee (TCC) is the apex student council representing all departments within the institution. It was constituted with the vision of bringing cohesion, leadership, and efficiency to all inter- and intra-departmental activities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  TCC plays a crucial role in fostering a vibrant campus culture by bridging student initiatives with institutional goals. It promotes collaborative leadership and ensures seamless coordination between faculty, departments, and student bodies. By nurturing creativity, innovation, and responsibility, TCC stands as the cornerstone of student development and governance.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative group aspect-[4/3] w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src="tcc-about.jpg" 
                    alt="About TCC" 
                    className="relative rounded-lg shadow-xl w-full h-full object-contain object-center transform transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CodeZero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative group aspect-[4/3] w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src="codezero-about.jpg" 
                    alt="About CodeZero" 
                    className="relative rounded-lg shadow-xl w-full h-full object-contain object-center transform transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-purple-800">About CodeZero</h2>
                <p className="text-gray-700 leading-relaxed">
                  CodeZero is the student-driven technical wing of Anvaya, dedicated to igniting a passion for innovation and coding excellence. With a mission to explore, upskill, participate, and conquer, CodeZero hosts regular coding challenges, workshops, and tech talks to prepare students for the rapidly evolving tech landscape.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether it's acing national hackathons or exploring open-source contributions, CodeZero provides the launchpad for tech-savvy students to thrive, compete, and lead in real-world technology arenas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOD's Message Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-purple-800">HOD's Message</h2>
                <p className="text-gray-700 leading-relaxed italic">
                  "Welcome to Anvaya, a digital gateway to all that defines our department's culture, competence, and community."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This platform is a vision realized—to create a centralized and accessible space for students to stay connected, informed, and involved. It reflects our commitment to nurturing talent, encouraging collaboration, and celebrating the multifaceted spirit of our students.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By integrating Anvaya, TCC, and CodeZero, this website aligns seamlessly with the department's mission of holistic development. It serves not only as an event archive but as a live ecosystem for innovation, leadership, and student growth. We believe that such a unified digital presence will further elevate the departmental spirit and amplify student success.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold mt-4">
                  — Dr. Vindya P. Malagi, Head of Department - Artificial Intelligence and Machine Learning
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative group aspect-[4/3] w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src="hod-message.jpg" 
                    alt="HOD's Message" 
                    className="relative rounded-lg shadow-xl w-full h-full object-contain object-center transform transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About; 