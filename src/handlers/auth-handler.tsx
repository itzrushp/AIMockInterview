import { db } from "@/config/firebase.config";
import {LoaderPage} from "@/layouts/loader-page";
import { useAuth, useUser } from "@clerk/clerk-react";
import { getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthHanlder = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storeUserData = async () => {
      if (isSignedIn && user) {
        setLoading(true);
        try {
          const userSnap = await getDoc(doc(db,"users", user.id)); // Missing document reference, needs to be completed
          if(!userSnap.exists()) {
            
          }
        } catch (error) {
          console.log("Error on storing the user data", error);
        }
        setLoading(false); // Set loading to false after the operation is complete
      }
    };

    storeUserData(isSignedIn, user, pathname, navigate); // Passing arguments to the async function is not needed if you're using closures
  }, [isSignedIn, user, pathname, navigate]);

  if (loading) {
    return <LoaderPage />;
  }

  return null;
};

export default AuthHanlder;