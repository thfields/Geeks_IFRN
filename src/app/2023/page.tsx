'use client'; 
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar";

const Aula1 = () => {
  const { value, handleNext, handlePrev } = Carousel(8);
  const imgSrc = `/2023/aula 1/${value}.jpg`;

  return (
    <div className='mt-5'>
      <h1 className='font-press-start text-center  mx-auto p-5 text-2xl w-60 mb-5 bg-white rounded-full'>Aula 1</h1>
      <div className="flex items-center justify-center w-full h-full">
        <button className="text-2xl bg-zinc-300 w-10 h-10 rounded-full" onClick={handlePrev}>❮</button>
        <Image src={imgSrc} className="rounded-xl shadow-xl" width={1000} height={900} id="one" alt={`Slide ${value}`} />
        <button className="text-2xl bg-zinc-300 w-10 h-10 rounded-full" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};
const Aula2 = () => {
  const { value, handleNext, handlePrev } = Carousel(16); // Define o número máximo de slides para a segunda div
  const imgSrc = `/2023/aula 2/${value}.jpg`; // Substitua pelo caminho correto

  return (
    <div className="mt-5">
      <h1 className='font-press-start text-center mx-auto p-5 text-2xl w-60 mb-5 bg-white rounded-full'>Aula 2</h1>
      <div className="flex items-center justify-center w-full h-full">
        <button className="text-2xl bg-zinc-300 w-10 h-10 rounded-full" onClick={handlePrev}>❮</button>
        <Image src={imgSrc} className="rounded-xl shadow-xl" width={1000} height={900} id="two" alt={`Slide ${value}`} />
        <button className="text-2xl bg-zinc-300 w-10 h-10 rounded-full" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col justify-around align-center">
        <Sidebar />
        <div className='flex flex-col gap-5'>
          <Aula1 />
          <Aula2 />
        </div>
      </div>
    </div>
  )
}

export default page