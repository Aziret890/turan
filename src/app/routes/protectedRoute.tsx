import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
import { useActions } from "../../hooks/useActions";

interface IProps {
  Page: () => JSX.Element;
  privates: boolean;
}

export default function ProtectedRoute({ Page, privates }: IProps) {
  const { currentUser } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { setUser } = useActions();

  useEffect(() => {
    setUser();
  }, []);
  useEffect(() => {
    if (privates && currentUser) return;
    if (privates && !currentUser) {
      navigate("/login");
    }
  }, [privates, currentUser]);

  return <Page />;
}
