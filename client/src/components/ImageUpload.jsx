import React from "react";

function ImageUpload({ formData, setFormData }) {
  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dd54czsje", // Your Cloud Name
        uploadPreset: "mern estate", // Upload preset you created
        sources: ["local", "url", "camera"], // You can choose sources for uploading
        multiple: false, // Single image upload
        cropping: false, // No cropping
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log("Image URL:", result.info.secure_url);

          // Update formData with the new image URL
          setFormData({
            ...formData, // keep the previous form data
            imageUrls: [...formData.imageUrls, result.info.secure_url], // Add the new image URL
          });
        }
      }
    );
  };

  return <button onClick={handleUpload}>Upload Image</button>;
}

export default ImageUpload;
