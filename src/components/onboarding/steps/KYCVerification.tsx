import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface KYCVerificationProps {
  onBack: () => void;
  onComplete: () => void;
}

const KYCVerification: React.FC<KYCVerificationProps> = ({ onBack, onComplete }) => {
  const [documentType, setDocumentType] = useState('national-id');
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  const handleFileChange = (side: 'front' | 'back') => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (side === 'front') {
        setFrontImage(e.target.files[0]);
      } else {
        setBackImage(e.target.files[0]);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="text-base font-medium text-gray-900">Identity Verification</label>
        <p className="text-sm text-gray-500">
          Please provide a valid government-issued ID for verification
        </p>
        
        <div className="mt-4">
          <select
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="national-id">National ID</option>
            <option value="passport">Passport</option>
            <option value="drivers-license">Driver's License</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Front of ID</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="front-file" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>Upload a file</span>
                  <input
                    id="front-file"
                    name="front-file"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileChange('front')}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
          {frontImage && (
            <p className="mt-2 text-sm text-gray-500">{frontImage.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Back of ID</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="back-file" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>Upload a file</span>
                  <input
                    id="back-file"
                    name="back-file"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileChange('back')}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
          {backImage && (
            <p className="mt-2 text-sm text-gray-500">{backImage.name}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Complete Registration
        </button>
      </div>
    </form>
  );
};

export default KYCVerification;