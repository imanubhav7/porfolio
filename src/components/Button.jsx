import React from "react";

const Button = ({text,className,id,href}) => {

  const handleClick = (e) => {
        if(target){
        e.preventDefault()
        const target = document.getElementById('counter')
        if(target && id){
          const offset = window.innerHeight * 0.15;  // Leaves 15% space above
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({top, behavior: 'smooth'})
        }
      }
    
  }

  return (
    <a 
    onClick={handleClick}
    href={href || "#"}
     target={href ? "_blank" : undefined}
    className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle"/>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
            <img src="./images/arrow-down.svg"  alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
