import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

const PoppyButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Tooltip / Chat bubble */}
      {isOpen && (
        <div className="bg-white border border-border shadow-elegant p-4 rounded-2xl max-w-[280px] animate-fade-in mb-2">
          <p className="text-sm text-navy font-medium mb-2">Halo! Saya Poppy.</p>
          <p className="text-xs text-muted-foreground mb-4">Ada yang bisa saya bantu terkait konsultasi hukum Anda hari ini?</p>
          <a 
            href="https://wa.me/628123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-navy text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-navy-muted transition-colors"
          >
            Konsultasi WhatsApp
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-elegant border border-border flex items-center justify-center overflow-visible group hover:scale-105 transition-transform duration-300"
      >
        <div className="absolute -top-3 -left-3 w-20 h-20 md:w-24 md:h-24 pointer-events-none animate-poppy-bob overflow-hidden rounded-full border-2 border-white shadow-md bg-white">
          <img 
            src="/poppy-character.png" 
            alt="Poppy" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="z-10 bg-navy text-white p-2 rounded-full absolute bottom-0 right-0 shadow-lg border-2 border-white">
          {isOpen ? <X size={16} /> : <MessageSquare size={16} />}
        </div>
      </button>
    </div>
  );
};

export default PoppyButton;
