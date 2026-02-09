
import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, ChevronLeft, ChevronRight, Share2, Link, Check } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedImageId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageId]);

  const selectedImage = GALLERY_IMAGES.find((img) => img.id === selectedImageId);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === selectedImageId);
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setSelectedImageId(GALLERY_IMAGES[nextIndex].id);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === selectedImageId);
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedImageId(GALLERY_IMAGES[prevIndex].id);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;

    const shareData = {
      title: 'KSMC Digital Training Program',
      text: `Check out this highlight from the KSMC Digital Training: ${selectedImage.caption}`,
      url: selectedImage.url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(selectedImage.url);
        setShowCopyFeedback(true);
        setTimeout(() => setShowCopyFeedback(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Program Highlights</h2>
          <p className="text-xl text-gray-600">Seeing the impact through the eyes of our participants.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImageId(image.id)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-green-700"
              aria-label={`View ${image.caption}`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium text-lg text-left">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium">Capture the moments. Inspire the future.</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImageId(null)}
        >
          {/* Action Buttons Top */}
          <div className="absolute top-6 right-6 flex items-center space-x-4 z-[110]">
            <button 
              className="relative p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center"
              onClick={handleShare}
              title={navigator.share ? "Share highlight" : "Copy image link"}
            >
              {showCopyFeedback ? (
                <Check className="w-6 h-6 text-green-400" />
              ) : (
                navigator.share ? <Share2 className="w-6 h-6" /> : <Link className="w-6 h-6" />
              )}
              {showCopyFeedback && (
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs py-1 px-2 rounded shadow-lg animate-in slide-in-from-top-1">
                  Link Copied!
                </span>
              )}
            </button>
            <button 
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center"
              onClick={() => setSelectedImageId(null)}
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hidden sm:block"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hidden sm:block"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white max-w-2xl px-4">
              <p className="text-xl font-medium leading-relaxed">{selectedImage.caption}</p>
              <p className="mt-2 text-white/50 text-sm font-medium tracking-wide uppercase">
                Image {GALLERY_IMAGES.findIndex(img => img.id === selectedImageId) + 1} of {GALLERY_IMAGES.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
