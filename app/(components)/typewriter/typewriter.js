"use client"
import Link from 'next/link';
import Typical from "react-typical"
const Typewriter = () => {
    return (
        <Typical
        steps={['PRACTICAL', 3000, 'AFFORDABLE', 3000, 'EASY', 3000]}     
        loop={Infinity}
        wrapper="p"
      />
    );
};

export default Typewriter;
