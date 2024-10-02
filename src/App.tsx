import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Authlayout from "./components/shared/Authlayout/Authlayout";
import Notfound from "./components/shared/NotFound/Notfound";
import Login from "./components/modules/Authentcation/Login/Login";
import Register from "./components/modules/Authentcation/Register/Register";
import ForgetPassword from "./components/modules/Authentcation/ForgetPassword/ForgetPassword";
import ResetPassword from "./components/modules/Authentcation/ResetPassword/ResetPassword";
import ChangePassword from "./components/modules/Authentcation/Changepassword/ChangePassword";
import Dashboard from "./components/modules/InstructorsModule/Dashboard/Dashboard";
import Students from "./components/modules/InstructorsModule/Students/Students";
import Groups from "./components/modules/InstructorsModule/Groups/Groups";
import Quizzes from "./components/modules/InstructorsModule/Quizzes/Quizzes";
import Results from "./components/modules/InstructorsModule/Results/Results";
import Help from "./components/modules/InstructorsModule/Help/Help";
import MasterStudents from "./components/shared/MasterStudints/MasterStudents";
import MasterInstructors from "./components/shared/MasterInstructor/MasterInstructors";
import Quizz from "./components/modules/StudentsModule/Quizz/Quizz";
import ResultsStudents from "./components/modules/StudentsModule/Results/ResultsStudents";
import DashboardStudent from "./components/modules/StudentsModule/Dashboard/DashboardStudents";
// creat routing path cildren
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Authlayout />,
      errorElement: <Notfound />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "Register",
          element: <Register />,
        },
        {
          path: "ForgetPassword",
          element: <ForgetPassword />,
        },
        {
          path: "ResetPassword",
          element: <ResetPassword />,
        },
        {
          path: "changePassword",
          element: <ChangePassword />,
        },
      ],
    },
    {
      path: "/instructor",
      element: <MasterInstructors />,

      errorElement: <Notfound />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "Dashboard",
          element: <Dashboard />,
        },
        {
          path: "Students",
          element: <Students />,
        },

        {
          path: "Groups",
          element: <Groups />,
        },
        {
          path: "Quizzes",
          element: <Quizzes />,
        },
        {
          path: "Results",
          element: <Results />,
        },
        {
          path: "Help",
          element: <Help />,
        },
      ],
    },
    {
      path: "/Studints",
      element: <MasterStudents />,
      errorElement: <Notfound />,
      children: [
        {
          index: true,
          element: <DashboardStudent />,
        },
        {
          path: "Dashboard",
          element: <DashboardStudent />,
        },
        {
          path: "Quizzes",
          element: <Quizz />,
        },
        {
          path: "Results",
          element: <ResultsStudents />,
        },
        {
          path: "Help",
          element: <Help />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
