import { BiLocationPlus } from "react-icons/bi";

const Subscribe = () => {
  const mapURL =
    "https://www.google.com/maps/dir/14.6190845,74.7843658/Sumukha+Speciality+Dental+Clinic,+JP+complex+5+cross,+opposite+to+urdu+government+school,+Sirsi,+Karnataka+581401/@14.613151,74.7849782,14z/data=!3m1!4b1!4m17!1m7!3m6!1s0x3bbea9eb9b144595:0xba90453c3ca40f08!2sSumukha+Speciality+Dental+Clinic!8m2!3d14.6143956!4d74.832569!16s%2Fg%2F11s99kx_nc!4m8!1m1!4e1!1m5!1m1!1s0x3bbea9eb9b144595:0xba90453c3ca40f08!2m2!1d74.832569!2d14.6143956?entry=ttu";

  return (
    <section className="text-center" id="contact-us">
      <h3 className="text-4xl font-palanquin font-bold text-coral-red mb-8">
        Visit Us
      </h3>

      <div className="md:flex items-center justify-center w-full max-w-screen mx-auto gap-6">
        <div className="w-full md:w-1/2">
          <a
            href={mapURL}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d61772.05782504421!2d74.76437803152523!3d14.613106733751158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d14.6190845!2d74.7843658!4m5!1s0x3bbea9eb9b144595%3A0xba90453c3ca40f08!2sSumukha%20Speciality%20Dental%20Clinic%2C%20JP%20complex%205%20cross%2C%20opposite%20to%20urdu%20government%20school%2C%20Sirsi%2C%20Karnataka%20581401!3m2!1d14.6143956!2d74.83256899999999!5e0!3m2!1sen!2sin!4v1693144849871!5m2!1sen!2sin"
              title="Google Map"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <button className="absolute inset-0 w-full h-full bg-transparent cursor-pointer">
              {/* Button to make the whole map section clickable */}
            </button>
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-start">
            <div className="flex items-start gap-x-2 mt-4">
              <BiLocationPlus className="mt-1 " />
              <p className="text-slate-700 ">
                Sumukha Specality Dental Clinic, <br /> JP Complex, 5 cross,{" "}
                <br />
                Sirsi, 581401
              </p>
            </div>
            <p className="font-light text-slate-600 ml-6 mt-4">
              Contact: +91 8892293397
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
