import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../features/User/userSlice";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const GetStarted = () => {
  const [wait, setWait] = useState(true);
  const { user, isLoading } = useSelector((state) => state.user);
  const { userAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserProfile(userAuth.user));
  }, [dispatch, userAuth.user]);

  useEffect(() => {
    if (!isLoading) {
      setWait(false);
    }
    if (!wait) {
      if (user) {
        navigate("/chat");
      } else {
        navigate("/profile");
      }
    }
  }, [isLoading, navigate, user, wait]);

  return <div>{isLoading && <Loading />}</div>;
};

export default GetStarted;
