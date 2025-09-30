"use client";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export default function UploaderComponent() {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const storageRef = firebase.storage().ref(`images/${Date.now()}-${file.name}`);
    const uploadTask = storageRef.put(file);

    setIsUploading(true);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(Math.round(progress));
      },
      () => setIsUploading(false),
      async () => {
        const url = await storageRef.getDownloadURL();
        setImageUrl(url);
        setIsUploading(false);
      }
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Upload Box */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-full p-8 text-center cursor-pointer transition ${
          isDragActive ? "bg-blue-50 border-blue-500" : "bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive ? "Drop the file here…" : "Click or drag to upload an image"}
        </p>
      </div>

      {/* Progress */}
      {isUploading && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

      {/* Preview */}
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" className="w-64 rounded-xl shadow-lg" />
      )}
    </div>
  );
}
