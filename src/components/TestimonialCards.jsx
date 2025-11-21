import React, { useState, useEffect, useRef, useCallback } from 'react';

// Data
import testimonialData from '../data/testimonialData';

function TestimonialCards() {
    const [cardAtivo, setCardAtivo] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    
    const [startX, setStartX] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const carouselRef = useRef(null); 

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

    const totalCards = testimonialData.length;

    const navigate = useCallback((direction) => {
        setCardAtivo(prevCardAtivo => {
            let newIndex = prevCardAtivo + direction;
            
            if (newIndex < 0) {
                newIndex = 0; 
            }

            if (newIndex > totalCards - visibleCards) {
                newIndex = totalCards - visibleCards; 
            }
            
            return newIndex;
        });
    }, [totalCards, visibleCards]);


    const handleStart = (clientX) => {
        setStartX(clientX);
        setIsSwiping(true);
    };

    const handleEnd = (clientX) => {
        if (!isSwiping) return;

        const distance = clientX - startX;
        const threshold = 50; 

        if (distance > threshold) {
            navigate(-1);
        } else if (distance < -threshold) {
            navigate(1);
        }

        setIsSwiping(false);
        setStartX(0);
    };
    
    const handleTouchStart = (e) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        handleEnd(e.changedTouches[0].clientX); 
    };

    const handleMouseDown = (e) => {
        handleStart(e.clientX);
    };

    useEffect(() => {
        const handleMouseUp = (e) => {
            if (isSwiping) {
                 handleEnd(e.clientX);
            }
        };

        const handleMouseMove = (e) => {
            if (isSwiping) {
                e.preventDefault(); 
            }
        };

        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isSwiping, startX, navigate, totalCards, visibleCards]); 


    return (
        <div className="flex flex-col items-center gap-10 w-full">
            <div 
                className="overflow-hidden w-full"
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
            >
                <div
                    className="flex gap-2 md:gap-9 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${cardAtivo * (100 / visibleCards)}%)`
                    }}
                >
                    {testimonialData.map((item, index) => {
                        const isActive = index >= cardAtivo && index < cardAtivo + visibleCards; 

                        return (
                            <div
                                key={index}
                                className={`
                                    shrink-0 
                                    flex flex-col justify-center text-center gap-4
                                    bg-primary rounded px-6 py-8 md:py-14
                                    transition-all duration-500
                                    ${isActive ? "" : "opacity-60"}
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
                    index <= totalCards - visibleCards ? (
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
                    ) : null
                ))}
            </div>
        </div>
    );
}

export default TestimonialCards;