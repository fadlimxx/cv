import { Card } from "flowbite-react";
import pp from "../assets/oi.png"; // Gambar profil
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Profile = () => {
  useEffect(() => {
    // Inisialisasi AOS untuk animasi
    AOS.init({
      duration: 1000, // Durasi animasi
      easing: "ease-in-out", // Easing untuk animasi
      once: true, // Animasi hanya dijalankan sekali
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5 rounded-lg shadow-xl">
      <Card className="max-w-full m-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between px-6 py-6 flex-wrap">
          {/* Profile Section */}
          <div
            className="flex flex-col items-center pb-10 sm:pb-0"
            data-aos="fade-right" // Animasi teks muncul dari kanan
          >
            {/* Gambar Profil dengan AOS Animation */}
            <img
              alt="Profile Image"
              height="96"
              src={pp}
              width="96"
              className="mb-3 rounded-full shadow-lg transform transition duration-300 hover:scale-110"
              data-aos="zoom-in" // Animasi gambar zoom-in
            />
            <h3 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">Fadli M Haisal</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">Mechanic</span>
          </div>

          {/* Deskripsi Tentang Saya */}
          <div
            className="flex flex-col sm:text-left py-4 sm:pl-10 text-center sm:text-left"
            data-aos="fade-up" // Animasi deskripsi muncul dari bawah
          >
            <h4 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Tentang Saya</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Saya dapat memperbaiki motor dan melakukan bore-up motor menjadi lebih kencang. Memperbaiki motor adalah sebagian dari hobi saya.</p>
          </div>

          {/* Contact Info Section */}
          <div
            className="flex flex-col sm:text-left py-4 sm:pl-10 text-center sm:text-left"
            data-aos="fade-left" // Animasi informasi kontak muncul dari kiri
          >
            <h4 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">+62 831-1664-2729</p>

            <h5 className="mt-4 mb-2 text-lg font-medium text-gray-900 dark:text-white">Email</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="mailto: fadlimuhammmadh08@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline transition duration-300 ease-in-out">
                fadlimuhammmadh08@gmail.com
              </a>
            </p>

            <h5 className="mt-4 mb-2 text-lg font-medium text-gray-900 dark:text-white">GitHub</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="https://github.com/fadlimxx" className="text-blue-600 dark:text-blue-400 hover:underline transition duration-300 ease-in-out">
                github.com/fadlimxx
              </a>
            </p>

            <h5 className="mt-4 mb-2 text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="https://linkedin.com/in/fadlimxx" className="text-blue-600 dark:text-blue-400 hover:underline transition duration-300 ease-in-out">
                linkedin.com/in/fadlimxx
              </a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
