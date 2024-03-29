import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useAppDispatch } from "../store";

const rootActions = {};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};
