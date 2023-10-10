'use client'; 
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Participantes from "@/components/Participantes";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <MainContent />
    </div>
  )
}

