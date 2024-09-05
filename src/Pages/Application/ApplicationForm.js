import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import UploadIcon from '../../Assets/Icon/upload.svg';

const ApplicationForm = () => {
  const { id } = useParams(); // Retrieve the job ID from the URL

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dob: '',
    qualification: '',
    resume: null,
    consent: false,
    file: null,
  });

  const [errors, setErrors] = useState({}); // Error state for validation feedback

  const onDrop = (acceptedFiles) => {
    setFormData({
      ...formData,
      file: acceptedFiles[0],
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'application/pdf, application/msword, .doc, .docx',
    multiple: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.qualification) newErrors.qualification = 'Qualification is required';
    if (!formData.file) newErrors.file = 'Resume is required';
    if (!formData.consent) newErrors.consent = 'You must accept the privacy policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (!validateForm()) {
      return;
    }

    // Create FormData to handle file and other data
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('firstName', formData.firstName);
    formDataToSubmit.append('lastName', formData.lastName);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phoneNumber', formData.phoneNumber);
    formDataToSubmit.append('dob', formData.dob);
    formDataToSubmit.append('qualification', formData.qualification);
    formDataToSubmit.append('resume', formData.file);
    formDataToSubmit.append('consent', formData.consent);
    formDataToSubmit.append('jobId', id); // Append the job ID to the form data

    // try {
      // const response = await fetch('https://your-backend-api-url.com/api/apply', {
      //   method: 'POST',
      //   body: formDataToSubmit,
      // });

      // if (response.ok) {
        alert('Application submitted successfully!');
        // Optionally, clear the form or redirect the user after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          dob: '',
          qualification: '',
          resume: null,
          consent: false,
          file: null,
        });
      // } else {
      //   alert('Failed to submit application. Please try again.');
      // }
    // } catch (error) {
      // console.error('Error submitting application:', error);
      // alert('An error occurred while submitting the application.');
    // }
  };

  const formFields = [
    { label: 'First Name', type: 'text', name: 'firstName', placeholder: 'Enter first name', required: true },
    { label: '', type: 'text', name: 'lastName', placeholder: 'Enter Second name', required: false },
    { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter email', required: true },
    { label: 'Phone Number', type: 'tel', name: 'phoneNumber', placeholder: 'Enter phone number', required: true },
    { label: 'Date of Birth', type: 'date', name: 'dob', placeholder: '', required: true },
    { label: 'Highest Qualification', type: 'text', name: 'qualification', placeholder: 'Enter qualification', required: true }
  ];

  return (
    <div className="flex mt-10 justify-center">
      <div className="bg-white p-12 rounded-md shadow-md w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center mb-16">Job Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {formFields.map((field, index) => (
              <div key={index} className="flex flex-col justify-start">
                <label className="flex justify-start ml-2 text-sm font-medium h-6">
                  {field.label} {field.required && <span className='text-red-700'>*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`mt-1 w-full border-b focus:outline-none border-gray-300 rounded-md p-2 ${errors[field.name] ? 'border-red-500' : ''}`}
                  required={field.required}
                />
                {errors[field.name] && <span className="text-red-500 text-sm">{errors[field.name]}</span>}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <label className="flex justify-start text-sm font-medium">Upload Resume <span className="text-red-700">*</span></label>
            <div
              {...getRootProps()}
              className={`border-dashed border-2 border-gray-300 p-6 mt-4 w-full rounded-md text-center ${isDragActive ? 'bg-gray-200' : 'bg-gray-50'}`}
            >
              <input {...getInputProps()} />
              {formData.file ? (
                <p>{formData.file.name}</p>
              ) : (
                <div>
                  <img className="mx-auto" src={UploadIcon} alt="Upload" />
                  <h1 className="text-[16px] font-semibold">Upload a file</h1>
                  <h1 className="text-[16px] leading-4 text-[#aaaaaa] mt-4 pb-4">Drag and drop files here</h1>
                </div>
              )}
            </div>
            {errors.file && <span className="text-red-500 text-sm">{errors.file}</span>}
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-sm">I accept the electronic saving of my data according to the privacy policy.</label>
          </div>
          {errors.consent && <span className="text-red-500 text-sm">{errors.consent}</span>}

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`px-12 py-3 rounded-full ${formData.consent && formData.file
                ? 'bg-[#5D8424] text-white cursor-pointer'
                : 'bg-[#F1F1F1] text-[#B1B1B1] cursor-not-allowed'}`}
              disabled={!formData.consent || !formData.file} // Disable button if no consent or file is not uploaded
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;

