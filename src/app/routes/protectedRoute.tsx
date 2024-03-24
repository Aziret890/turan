import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
import { useEffect } from "react";

interface IProps {
  Page: () => JSX.Element;
  privates: boolean;
}

export default function ProtectedRoute({ Page, privates }: IProps) {
  const { currentUser } = useAppSelector((s) => s.user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      currentUser !== null &&
      (location.pathname === "/login" || location.pathname === "/registration")
    ) {
      navigate("/");
    }

    if (privates && !currentUser) {
      navigate("/basket");
    }
  }, [currentUser, privates, location, navigate]);

  return <Page />;
}
