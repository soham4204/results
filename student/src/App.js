import { useState, useEffect } from 'react';
import image from './assets/image.png';

// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prn, setPrn] = useState('');
  const [dob, setDob] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Prevent screenshot on mobile
  useEffect(() => {
    const preventScreenshot = (e) => {
      e.preventDefault();
      alert("Screenshots are not allowed on this page");
    };
    
    document.addEventListener('contextmenu', preventScreenshot);
    
    return () => {
      document.removeEventListener('contextmenu', preventScreenshot);
    };
  }, []);
  
  // Check login credentials
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Valid credentials (for demo purposes)
      if (prn === '2215010216' && dob) {
        setIsLoggedIn(true);
      } else {
        setError('Invalid PRN number or Date of Birth');
      }
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn ? <ResultPage prn={prn} /> : <FormComponent 
        prn={prn} 
        setPrn={setPrn} 
        dob={dob} 
        setDob={setDob} 
        handleLogin={handleLogin} 
        isLoading={isLoading}
        error={error}
      />}
    </div>
  );
};

// Form Component
const FormComponent = ({ prn, setPrn, dob, setDob, handleLogin, isLoading, error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-800 text-white p-4 text-center">
            <h1 className="text-xl font-bold">University of Mumbai</h1>
            <p className="text-sm">Student Result Portal</p>
          </div>
          
          <form onSubmit={handleLogin} className="p-6 space-y-6">
            <div className="space-y-2">
              <label htmlFor="prn" className="block text-sm font-medium text-gray-700">
                PRN Number
              </label>
              <input
                type="text"
                id="prn"
                value={prn}
                onChange={(e) => setPrn(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your PRN number"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
            >
              {isLoading ? 'Checking...' : 'View Result'}
            </button>
          </form>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            For any technical issues, please contact the University Examination Department.
          </p>
        </div>
      </div>
    </div>
  );
};

// Result Page Component
const ResultPage = ({ prn }) => {
  const studentData = {
    name: "THASAL JAY RAVINDRA RAVINA",
    examSeatNo: "2215010216",
    universityPRN: "202201640126145",
    semester: "VI",
    examMonth: "March-2025",
    examType: "Regular",
    specialization: "MARKETING",
    courses: [
      {
        code: "JBCUBMS05-MKT",
        title: "BRAND MANAGEMENT",
        internalMarks: "24/40",
        externalMarks: "24/60",
        totalMarks: "48/100",
        grade: "C",
        gradePoints: "5",
        credits: "3",
        creditPoints: "15"
      },
      {
        code: "JBCUBMS06-MKT",
        title: "RETAIL MANAGEMENT",
        internalMarks: "25/40",
        externalMarks: "24/60",
        totalMarks: "49/100",
        grade: "C",
        gradePoints: "5",
        credits: "3",
        creditPoints: "15"
      },
      {
        code: "JBCUBMS07-MKT",
        title: "INTERNATIONAL MARKETING",
        internalMarks: "17/40",
        externalMarks: "25/60",
        totalMarks: "42/100",
        grade: "D",
        gradePoints: "4",
        credits: "3",
        creditPoints: "12"
      },
      {
        code: "JBCUBMS08-MKT",
        title: "MEDIA PLANNING & MANAGEMENT",
        internalMarks: "29/40",
        externalMarks: "24/60",
        totalMarks: "53/100",
        grade: "B",
        gradePoints: "6",
        credits: "3",
        creditPoints: "18"
      },
      {
        code: "JBCUBMS13-MKT",
        title: "OPERATION RESEARCH",
        internalMarks: "34/40",
        externalMarks: "24/60",
        totalMarks: "58/100",
        grade: "B+",
        gradePoints: "7",
        credits: "4",
        creditPoints: "28"
      },
      {
        code: "JBCUBMS14-MKT",
        title: "PROJECT WORK",
        internalMarks: "20/40",
        externalMarks: "47/60",
        totalMarks: "67/100",
        grade: "A",
        gradePoints: "8",
        credits: "4",
        creditPoints: "32"
      }
    ],
    totalMarks: "317/600",
    sgpi: "6",
    overallGrade: "C+",
    remark: "SUCCESSFUL",
    creditsEarned: "20",
    semesterCredits: {
      "SEM I": "5.10",
      "SEM II": "5.45",
      "SEM III": "6.10",
      "SEM IV": "6.45",
      "SEM V": "6.10",
      "SEM VI": "6"
    },
    semesterCreditPoints: {
      "SEM I": "20",
      "SEM II": "20",
      "SEM III": "20",
      "SEM IV": "20",
      "SEM V": "20",
      "SEM VI": "20"
    },
    cgpi: "5.76"
  };

  const goBack = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 py-4 px-3">
            {/* Actions */}
            <div className="flex justify-between mt-4 px-3">
              <button 
                onClick={goBack}
                className="px-4 py-2 bg-gray-600 text-white rounded-md shadow hover:bg-gray-700"
              >
                Go Back
              </button>
            </div>
      {/* Header */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-4">
        <div className="p-3 border-b border-gray-200">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full bg-yellow-50 border-y-2 border-red-500">
              <h2 className="text-center text-red-600 font-bold text-lg py-1">UNIVERSITY OF MUMBAI</h2>
            </div>
            <div className="py-2">
              <p className="text-xs text-gray-600">Vidya Prasarak Mandal's</p>
              <h1 className="text-blue-700 font-bold text-base">K.G. Joshi College of Arts &</h1>
              <h1 className="text-blue-700 font-bold text-base">N.G. Bedekar College of Commerce (Autonomous), Thane</h1>
              <p className="text-xs text-gray-600">Accredited "A" Grade by NAAC in Third Cycle</p>
              <p className="text-xs text-gray-600">Best College Award (University of Mumbai)</p>
              <p className="text-xs text-gray-600">ISO 9001: 2015</p>
              <p className="text-xs text-gray-600">(Affiliated to University of Mumbai)</p>
            </div>
          </div>
        </div>
        
        <div className="w-full text-center border-t-2 border-b-2 border-pink-500 py-1">
          <h3 className="text-lg font-bold text-gray-700">GRADE CARD</h3>
        </div>
        
        {/* Student Info */}
        <div className="p-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-semibold">Bachelor of Management Studies (BMS)</p>
              <p><span className="font-medium">Examination Seat No:</span> {studentData.examSeatNo}</p>
              <p><span className="font-medium">University PRN:</span> {studentData.universityPRN}</p>
            </div>
            <div className="justify-self-end">
              <img src={image} alt='Profile Pic' className="h-16 w-16 mx-auto" />
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div>
              <p><span className="font-medium">Name of the Learner:</span> {studentData.name}</p>
              <p><span className="font-medium">Specialization:</span> {studentData.specialization}</p>
            </div>
            <div className="text-right">
              <p><span className="font-medium">SEMESTER:</span> {studentData.semester}</p>
              <p><span className="font-medium">Month and Year of Exam:</span> {studentData.examMonth}</p>
              <p><span className="font-medium">Type:</span> {studentData.examType}</p>
            </div>
          </div>
        </div>
        
        {/* Results Table */}
        <div className="p-3 overflow-x-auto">
          <table className="min-w-full border text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th rowSpan="2" className="border px-2 py-1 text-center">Course Code</th>
                <th rowSpan="2" className="border px-2 py-1 text-center">Course Title</th>
                <th colSpan="5" className="border px-2 py-1 text-center">Marks</th>
                <th rowSpan="2" className="border px-2 py-1 text-center">Grade</th>
                <th rowSpan="2" className="border px-2 py-1 text-center">Credits Earned</th>
                <th rowSpan="2" className="border px-2 py-1 text-center">Grade Points</th>
                <th rowSpan="2" className="border px-2 py-1 text-center">Credit Points</th>
              </tr>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1 text-center">Internal</th>
                <th className="border px-2 py-1 text-center">External</th>
                <th className="border px-2 py-1 text-center">Min Marks</th>
                <th className="border px-2 py-1 text-center">Total</th>
                <th className="border px-2 py-1 text-center">Max Marks</th>
              </tr>
            </thead>
            <tbody>
              {studentData.courses.map((course, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border px-2 py-1">{course.code}</td>
                  <td className="border px-2 py-1">{course.title}</td>
                  <td className="border px-2 py-1 text-center">{course.internalMarks}</td>
                  <td className="border px-2 py-1 text-center">{course.externalMarks}</td>
                  <td className="border px-2 py-1 text-center">40</td>
                  <td className="border px-2 py-1 text-center">{course.totalMarks}</td>
                  <td className="border px-2 py-1 text-center">100</td>
                  <td className="border px-2 py-1 text-center">{course.grade}</td>
                  <td className="border px-2 py-1 text-center">{course.credits}</td>
                  <td className="border px-2 py-1 text-center">{course.gradePoints}</td>
                  <td className="border px-2 py-1 text-center">{course.creditPoints}</td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-medium">
                <td colSpan="5" className="border px-2 py-1 text-right">Total</td>
                <td className="border px-2 py-1 text-center">{studentData.totalMarks}</td>
                <td colSpan="2" className="border px-2 py-1"></td>
                <td colSpan="2" className="border px-2 py-1 text-right">SGPI:</td>
                <td colSpan="2" className="border px-2 py-1">{studentData.sgpi}</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="font-bold">REMARK: {studentData.remark}</p>
              <p>CREDITS EARNED: {studentData.creditsEarned}</p>
            </div>
            <div className="text-right">
              <p>OVERALL GRADE: {studentData.overallGrade}</p>
              <p>CGPI: {studentData.cgpi}</p>
            </div>
          </div>
          
          {/* Semester Summary */}
          <div className="mt-4">
            <table className="min-w-full border text-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">SGPI</th>
                  {Object.keys(studentData.semesterCredits).map((sem, index) => (
                    <th key={index} className="border px-2 py-1">{sem}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1 bg-gray-50 font-medium">SGPI</td>
                  {Object.keys(studentData.semesterCredits).map((sem, index) => (
                    <td key={index} className="border px-2 py-1 text-center">{studentData.semesterCredits[sem]}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border px-2 py-1 bg-gray-50 font-medium">CREDITS EARNED</td>
                  {Object.keys(studentData.semesterCreditPoints).map((sem, index) => (
                    <td key={index} className="border px-2 py-1 text-center">{studentData.semesterCreditPoints[sem]}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;