import React, { useState, useEffect } from 'react';
import testimonialData from '../data/testimonialData';

function TestimonialCards() {
    const [cardAtivo, setCardAtivo] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.matchMedia("(max-width: 767px)").matches) {
                setVisibleCards(1); 
            } else if (window.matchMedia("(max-width: 1023px)").matches) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3); 
            }
        };

        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    return (
        <div className="flex flex-col items-center gap-10 w-full">
            <div className="overflow-hidden w-full">
                <div
                    className="flex gap-9 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${cardAtivo * (100 / visibleCards)}%)`
                    }}
                >
                    {testimonialData.map((item, index) => {
                        const isActive = cardAtivo === index;

                        return (
                            <div
                                key={index}
                                className={`
                                    shrink-0 
                                    flex flex-col justify-center text-center gap-4
                                    bg-primary rounded p-6
                                    transition-all duration-500
                                    ${isActive
                                        ? "h-[500px]"
                                        : "h-[400px] opacity-80"
                                    }
                                `}
                                style={{
                                    width: `calc(100% / ${visibleCards})`
                                }}
                            >
                                <div className='flex flex-col items-center'>
                                    <img className='w-14 h-14 rounded-full' src={item.urlImage} alt={`Foto de perfil de ${item.fullName}`} />
                                    <h3 className="text-white text-[24px] font-serif font-bold">
                                        {item.fullName}
                                    </h3>
                                </div>

                                <p className="text-white text-[18px] leading-normal">
                                    {item.testimonial}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex gap-3">
                {testimonialData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCardAtivo(index)}
                        className={`
                            w-3 h-3 rounded-full transition-all 
                            ${cardAtivo === index
                                ? "bg-terciary scale-125"
                                : "bg-white hover:bg-terciary"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}

export default TestimonialCards;
