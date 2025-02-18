import React, { useState } from "react";
import { FaCloudUploadAlt, FaFileAlt } from "react-icons/fa";
import { handleApiResponse } from "../api/service";

const DocAnalizer = () => {
  const [files, setFiles] = useState([]);
  const [downloadLink, setDownloadLink] = useState(null);
  console.log(downloadLink, "downloadLink");
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleData = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files[]", file);
    });

    try {
      const response = await handleApiResponse("api/analyze", formData);

      const { docx_filename } = response;

      setDownloadLink(docx_filename);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-500 text-white relative">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-2">
          <FaFileAlt className="text-4xl" />
        </div>
        <h1 className="text-2xl font-bold">Document Analysis</h1>
        <p className="text-gray-400">
          Upload your document to get AI-powered insights
        </p>
      </div>
      <div className="bg-[#1C2333] p-6 rounded-lg w-[50%] text-center relative">
        <div className="border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-500 mb-4 relative z-10">
          <input
            type="file"
            accept=".pdf, image/*"
            multiple
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="mb-4">
            <FaCloudUploadAlt className="text-6xl mx-auto text-blue-700" />
          </div>
          <p className="mb-2">Drag & drop your files or click to browse</p>
          <p className="mb-4 text-gray-400">Multiple files supported</p>
        </div>

        {files.length > 0 && (
          <div>
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-700 p-2 rounded-md mb-4"
              >
                <span className="text-gray-300">{file.name}</span>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleRemoveFile(file.name)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          onClick={handleData}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Analyze Document
        </button>

        {downloadLink && (
          <a
            href={`http://10.1.1.98:5000/api/download/${downloadLink}`}
            download
            className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Download DOCX
          </a>
        )}
      </div>
    </div>
  );
};

export default DocAnalizer;
