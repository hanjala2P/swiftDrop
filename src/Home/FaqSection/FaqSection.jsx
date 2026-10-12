import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from 'react-icons/fi';

const FaqSection = () => {
    // Prothom FAQ ti by default open rakhar jonno 0 dewa holo
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does this posture corrector work?",
            answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
        },
        {
            question: "Is it suitable for all ages and body types?",
            answer: "Yes, our posture corrector comes with adjustable straps designed to fit various body shapes and sizes comfortably, making it suitable for teens, adults, and seniors alike."
        },
        {
            question: "Does it really help with back pain and posture improvement?",
            answer: "Absolutely! Regular use helps reduce muscle strain, alleviates chronic back pain, and trains your muscle memory to maintain a straight posture naturally."
        },
        {
            question: "Does it have smart features like vibration alerts?",
            answer: "Yes, advanced versions include smart angle-detection sensors that gently vibrate when you slouch past 25 degrees, reminding you to sit up straight."
        },
        {
            question: "How will I be notified when the product is back in stock?",
            answer: "You can simply drop your email address on our notification box, and our system will instantly send you an alert as soon as the item is available."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='py-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto'>
            
            {/* Section Header */}
            <div className='text-center max-w-xl mx-auto mb-12 space-y-3'>
                <h2 className='text-3xl sm:text-4xl font-extrabold font-heading text-tertiary2'>
                    Frequently Asked Question (FAQ)
                </h2>
                <p className='text-gray-500 text-sm sm:text-base font-body'>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            {/* FAQ List Container */}
            <div className='space-y-4 mb-10'>
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div 
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                isOpen 
                                    ? 'bg-[#EBF3F2] border-[#C5DCD8]' 
                                    : 'bg-white border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            {/* Question Header Button */}
                            <button
                                onClick={() => toggleFaq(index)}
                                className='w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer'
                            >
                                <span className='font-heading font-bold text-tertiary2 text-base sm:text-lg pr-4'>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'text-tertiary2' : 'text-gray-500'}`}>
                                    {isOpen ? <FiChevronUp className='text-xl' /> : <FiChevronDown className='text-xl' />}
                                </span>
                            </button>

                            {/* Answer Content with Smooth Collapse Effect */}
                            {isOpen && (
                                <div className='px-6 pb-6 text-gray-600 text-sm sm:text-base font-body leading-relaxed animate-fadeIn'>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* See More FAQ's Button */}
            <div className='flex justify-center'>
                <button className='group inline-flex items-center gap-3 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold px-6 py-3.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer'>
                    <span>See More FAQ's</span>
                    <span className='w-8 h-8 rounded-full bg-[#0B1E1B] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45'>
                        <FiArrowUpRight className='text-lg' />
                    </span>
                </button>
            </div>

        </section>
    );
};

export default FaqSection;