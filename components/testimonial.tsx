import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "AI agents will become our digital assistants, helping us navigate the complexities of the modern world. They will make our lives easier and more efficient",
    author: "Jeff Bezos",
    role: "Amazon",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg/640px-Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
  },
  {
    id: 2,
    content: "Agents are not only going to change how everyone interacts with computers. They’re also going to upend the software industry, bringing about the biggest revolution in computing since we went from typing commands to tapping on icons",
    author: "Bill Gate",
    role: "",
    image: "https://www.gatesfoundation.org/-/media/gfo/3about/3people/bill-gates_headshot_5x4.png?rev=705d26ca3e3247b8b3776a9351416c71&w=1140&hash=2AF02C4872B616C8A217EE3E3D2F14A9",
  },
  {
    id: 3,
    content: "AI agents will become the primary way we interact with computers in the future. They will be able to understand our needs and preferences, and proactively help us with tasks and decision-making",
    author: "Satya Nadella",
    role: "Microsoft",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEt3FJSW7SXNZSjNe_pLL55atlSS3OqByiWr_ewAmq98bZfOgbP76gPr7HedgeaoMz_6kQPtJPqhY5x31arh6uT76M6rSS0e1al2SjLGM",
  },
  {
    id: 4,
    content: "he set of tasks AI can do will expand dramatically this year because of agentic workflows… We’ll need to learn to delegate tasks to AI agents and patiently wait for responses",
    author: "Andrew Ng",
    role: "Landing AI",
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTOOIquVIk-AUTan-9Rf0sG-Gl9P7ngVNdC2oLFUFc-4gkiB1wydkt2s36vjC8c7C8Xhtj6cxHNHEPR9xw",
  },
  {
    id: 5,
    content: "An AGI built as a doctor will have exhaustive knowledge of medical literature, billions of hours of clinical experience, and always be available at a fraction of the cost",
    author: "Ilya Sutskever",
    role: "OpenAI",
    image: "https://lh3.googleusercontent.com/proxy/-t1OZmUAWhoqOFNlSIQd41JNDNaz0kP6qSlya4QsoS56a9keY842mupvP9ZYEoA7F52PDTbRpRJQYLQZoCS4Ca7hlQXCkOEwsiPAv9VXeAo4E5Ar_5BbtDluRCH0wXmB20dM-dw",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-20 bg-[#F4EEEA]/10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl  text-center text-gray-800">
          Quotes
        </h2>

        <div className="relative mt-8">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center px-6 sm:px-8">
            <p className="text-md sm:text-lg text-gray-600 mb-6 sm:mb-8 min-h-[60px] sm:min-h-[80px]">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                {testimonials[currentIndex].author}
              </h3>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-teal-500 w-3 sm:w-4'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
